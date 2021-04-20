import express from "express";
import { getSingleTheme, createNewTheme } from "../controllers/themes.js";

const themes = express.Router();

themes.get("/:id", getSingleTheme);
themes.post("/", createNewTheme);

export default themes;
