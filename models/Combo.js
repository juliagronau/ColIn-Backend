import mongoose from "mongoose";
const { Schema, model } = mongoose;

const comboSchema = new Schema({
  savedcombo: {
    type: [
      {
        id: Number,
        name: String,
        hex: String,
      },
    ],
  },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model("Combo", comboSchema);

/* const newCombo = await Combo.create([])
await User.findOneAndUpdate({id}, {$push: {savedCombos: newCombo.id}}) */
