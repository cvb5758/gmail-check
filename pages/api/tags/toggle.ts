import dbConnect from '@/lib/db/db';
import Tag from '@/lib/db/tag.model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method == 'POST') {
    try {
      const { _id } = req.body;
      const tag = await Tag.findById(_id);
      console.log('reqbodt', tag);
      if (!tag) {
        return res.status(404).json({ message: 'Tag not found' });
      }
      tag.selected = !tag.selected;
      await tag.save();

      res.status(200).json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
