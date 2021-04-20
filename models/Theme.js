import mongoose from "mongoose";
const { Schema, model } = mongoose;

const themeSchema = new Schema({
  title: { type: String, required: true },
  colors: {
    type: [
      {
        id: Number,
        name: String,
        hex: String,
      },
    ],
    validate: [
      val => val.length >= 2 && val.length <= 6,
      "Color Scheme must have at least 2 and less than 7 colors",
    ],
    required: true,
  },
  author: { type: String },
});

export default model("Theme", themeSchema);
