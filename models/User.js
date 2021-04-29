import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  secret: { type: String }, // will contain saved combos
  id: { type: String },
});

export default model("User", userSchema);
