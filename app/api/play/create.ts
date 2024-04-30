// pages/api/play/create.ts
import prisma from '../../../prisma/client';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, value } =
      typeof req.body == 'string' ? JSON.parse(req.body) : req.body;

    try {
      // we can access db records with prisma functions
      const playRecord = await prisma.playing_with_neon.create({
        data: {
          // title,
          name: name,
          value: value,
        },
      });
      res.status(200).json({ playRecord });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
