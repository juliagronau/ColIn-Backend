import express from "express";
import {
  getSavedCombos,
  login,
  saveCombo,
  signup,
  approvedSession,
} from "../controllers/users.js";
import verifyToken from "../middlewares/verifyToken.js";

const users = express.Router();

users.post("/login", login);
users.post("/signup", signup);
users.put("/:id/savecombo", saveCombo);
users.get("/:id/savedcombos", getSavedCombos);
users.get("/verify-session", verifyToken, approvedSession);

export default users;
