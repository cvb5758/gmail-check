import dbConnect from '@/lib/db/db';
import Email from '@/lib/db/email.model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await dbConnect();

  try {
    const emails = await Email.find({}).sort({ receivedAt: -1 });
    res.status(200).json(emails);
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
