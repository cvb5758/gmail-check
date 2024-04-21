import Email from '@/lib/db/email.model';
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || !session.accessToken) {
    console.log('No session or access token found');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: session.accessToken,
    refresh_token: session.refreshToken,
  });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  console.log('Fetching emails');
  try {
    console.log('Fetching emails');
    const listResponse = await gmail.users.messages.list({
      userId: 'me',
      labelIds: ['INBOX'],
      maxResults: 10,
    });

    const messages = listResponse.data.messages || [];
    const details = await Promise.all(
      messages.map(async (message) => {
        const messageDetails = await gmail.users.messages.get({
          userId: 'me',
          id: message.id!,
          format: 'metadata',
          metadataHeaders: ['Date', 'Subject'],
        });
        const receivedAt = new Date(
          messageDetails.data.payload?.headers?.find((h) => h.name === 'Date')
            ?.value || ''
        );
        return {
          id: message.id,
          subject:
            messageDetails.data.payload?.headers?.find(
              (h) => h.name === 'Subject'
            )?.value || 'No Subject',
          receivedAt,
        };
      })
    );

    const newTitles = [];
    for (const title of details) {
      const exists = await Email.exists({ id: title.id });
      if (!exists) {
        newTitles.push(title);
      }
    }

    if (newTitles.length > 0) {
      await Email.insertMany(newTitles);
    }

    res.status(200).json(newTitles);
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
