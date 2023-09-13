import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const fetchUserInfo = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { email } = jwt.decode(token, process.env.SECRET_KEY);
    const user = await User.findOne({ email });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};