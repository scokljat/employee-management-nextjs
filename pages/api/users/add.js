// import { connectMongo } from "../../../database/conn";
// import User from "../../../model/user";

// export default async function addUser(req, res) {
//   try {
//     const { name, avatar, email, salary, date, status } = req.body;
//     console.log("Connecting to mongo");
//     await connectMongo();
//     console.log("Connected to mongo");
//     const user = await User.create(req.body);

//     res.json({ user });
//   } catch (error) {
//     console.log(error);
//     res.json({ error });
//   }
// }
