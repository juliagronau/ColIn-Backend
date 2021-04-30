import jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) throw new Error("Unauthorized");
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const foundUser = await User.findById(id);
    if (!foundUser) throw new Error("User does not exist");
    req.user = foundUser;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default verifyToken;
