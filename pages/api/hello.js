// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectionMongo from "@/database/conn";

export default function handler(req, res) {
  connectionMongo();
  res.status(200).json({ name: "John Doe" });
}
