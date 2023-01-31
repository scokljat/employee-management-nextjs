import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});

//new model in mongodb
const User = models.User || model("User", userSchema);

export default User;
