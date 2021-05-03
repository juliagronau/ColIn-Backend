import mongoose from "mongoose";
const { Schema, model } = mongoose;

const comboSchema = new Schema({
  savedcombos: {
    type: [
      {
        name: String,
        hex: String,
      },
    ],
  },
});

export default model("Combo", comboSchema);

/* const newCombo = await Combo.create([])
await User.findOneAndUpdate({id}, {$push: {savedCombos: newCombo.id}}) */
