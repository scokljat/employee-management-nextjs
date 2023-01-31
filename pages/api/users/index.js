import { connectMongo } from "../../../database/conn";
import { getUsers, postUser } from "../../../database/controller";

export default async function handler(req, res) {
  // connectMongo().catch(() =>
  //   res.status(405).json({ error: "Error in The Connection" })
  // );
  connectMongo();
  console.log("conected to mongo");

  //type of req
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    default:
      //res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
  //res.status(200).json({ name: "John Doe" });
}
