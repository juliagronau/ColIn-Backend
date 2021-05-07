import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  savedcombos: [{ type: Schema.Types.ObjectId, ref: "Combo" }],
  id: { type: String },
});

export default model("User", userSchema);
