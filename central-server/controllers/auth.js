import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from "../models/user.js";

dotenv.config();

const jwtsecret = process.env.SECRET_KEY;

const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, contactNumber } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(401).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      contactNumber,
    });

    const saveUser = await newUser.save();
    const token = jwt.sign({ email: saveUser.email }, jwtsecret);
    delete saveUser.password;

    res.status(203).json({ message: "LogIn Created Successfully", token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(403).json({ message: "No such User exists" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      res.status(401).json({ message: "Login using correct credentials" });

    const token = jwt.sign({ email: user.email }, jwtsecret);
    delete user.password;

    res.status(203).json({ message: "Logged In Successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signin, signup };
