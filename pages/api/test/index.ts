import dbConnect from '@/lib/db/db';
import Test from '@/lib/test/test.model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handlr(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      dbConnect();
      const tests = Test;

      const allTests = await tests.find({});

      res.status(200).json(allTests);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      dbConnect();
      const tests = Test;

      const newTest = new tests({
        title: 'test',
        content: 'test',
      });

      await newTest.save();

      res.status(201).json(newTest);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
