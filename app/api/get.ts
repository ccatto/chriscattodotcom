// pages/api/get.ts
// import prisma from "../../../prisma/client";
import prisma from "@/prisma/client";

export default async function handler(req:any, res:any) {
  if (req.method === "GET") {
    const { user } = req.query;

    try {
      const list = await prisma.playing_with_neon.findMany({
        // where: {
        //   userId: parseInt(user),
        // },
        // orderBy: {
        //   createdAt: "desc",
        // },
      });
      res.status(200).json({ list });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
