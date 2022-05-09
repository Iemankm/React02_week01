// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { addPost, getPost } from "../../services/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, blog, image } = req.body;
  addPost({ name, blog, image });

  res.status(200).json({ post: getPost() });
}
