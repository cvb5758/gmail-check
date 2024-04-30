import dbConnect from '@/lib/db/db';
import Tag from '@/lib/db/tag.model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const { name } = req.body;
      const newTag = new Tag({ name });
      await newTag.save();
      res.status(201).json(newTag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      await dbConnect();
      const tags = await Tag.find({});
      res.status(200).json(tags);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      console.log('Delete');
      await dbConnect();
      const { name } = req.body;
      const tag = await Tag.findOneAndDelete({ name });
      res.status(200).json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
