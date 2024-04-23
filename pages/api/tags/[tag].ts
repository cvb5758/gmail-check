// import dbConnect from '@/lib/db/db';
// import Tag from '@/lib/db/tag.model';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const {
//     query: { tag },
//     method,
//   } = req;

//   await dbConnect();

//   console.log('Tag:', tag);

//   if (method === 'DELETE') {
//     try {
//       const deletedTag = await Tag.findOneAndDelete({ name: tag });
//       if (!deletedTag) {
//         return res.status(404).json({ message: 'Tag not found' });
//       }
//       res.status(200).json({ message: `Tag ${tag} deleted successfully` });
//     } catch (error) {
//       console.error('Delete tag error:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['DELETE']);
//     res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
