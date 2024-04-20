import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || !session.accessToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.accessToken,
    refresh_token: session.refreshToken,
  });

  // console.log('oauth2Client: ', oauth2Client);
  // console.log(session);
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  try {
    const listResponse = await gmail.users.messages.list({
      userId: 'me',
      labelIds: ['INBOX'],
      maxResults: 10, // 또는 원하는 수량
    });

    const messages = listResponse.data.messages || [];
    const details = await Promise.all(
      messages.map(async (message) => {
        const messageDetails = await gmail.users.messages.get({
          userId: 'me',
          id: message.id!,
          format: 'metadata',
          metadataHeaders: ['Subject'],
        });
        return messageDetails;
      })
    );

    const titles = details.map((detail) => ({
      id: detail.data.id,
      subject:
        detail.data.payload?.headers?.find((h) => h.name === 'Subject')
          ?.value || 'No Subject',
    }));
    console.log(
      'titles: ',
      titles.map((title) => title.subject)
    );

    res.status(200).json(titles);
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
