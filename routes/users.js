import express from "express";
import { login, signup } from "../controllers/users.js";

const users = express.Router();

users.post("/login", login);
users.post("/signup", signup);

export default users;
