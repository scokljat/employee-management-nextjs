import mongoose from "mongoose";

// const connectionMongo = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URI);
//     if (connection.readyState == 1) console.log("Database connected!");
//   } catch (errors) {
//     return Promise.reject(errors);
//   }
// };

// export default connectionMongo;
export const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);
