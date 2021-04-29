import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const secret = "test";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: "There is no account with this email address" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Password is incorrect" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Oooops, something went wrong" });
  }
};

export const signup = async (req, res) => {
  //Do password validation in frontend and don't send to api
  const { email, username, password, repeatPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        message: "There is already an account with this email address",
      });
    if (password !== repeatPassword)
      return res
        .status(400)
        .json({ message: "The password you've entered don't match" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ result, token, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Oooops, something went wrong" });
  }
};
