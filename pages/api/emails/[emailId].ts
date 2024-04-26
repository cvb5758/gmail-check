import Email from '@/lib/db/email.model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    const { emailId } = req.query;
    const { isChecked } = req.body;
    try {
      const email = await Email.findOneAndUpdate(
        { _id: emailId },
        { isChecked },
        { new: true }
      );
      console.log('email', email);
      if (!email) {
        return res.status(404).json({ message: 'Email not found' });
      }
      res.status(200).json(email);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
