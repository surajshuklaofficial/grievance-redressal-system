import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import Resolver from "../models/resolver.js";
import Complaint from "../models/complaint.js";

dotenv.config();

const jwtsecret = process.env.SECRET_KEY;

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, contactNumber } = req.body;

    const findResolver = await Resolver.findOne({ email });
    if (findResolver) {
      return res.status(401).json({ message: "Resolver already exists" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newResolver = new Resolver({
      firstName,
      lastName,
      email,
      password: passwordHash,
      contactNumber,
    });

    const saveResolver = await newResolver.save();
    const token = jwt.sign({ email: saveResolver.email }, jwtsecret);
    delete saveResolver.password;

    res.status(203).json({ message: "LogIn Created Successfully", token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const resolver = await Resolver.findOne({ email });
    if (!resolver) res.status(403).json({ message: "No such Resolver exists" });

    const isMatch = await bcrypt.compare(password, resolver.password);
    if (!isMatch)
      res.status(401).json({ message: "Login using correct credentials" });

    const token = jwt.sign({ email: resolver.email }, jwtsecret);
    delete resolver.password;

    res.status(203).json({ message: "Logged In Successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchAssignedComplaints = async (req, res) => {
    try {
        const resolver = await Resolver.findOne({ _id: req.params.resolverId });
        const complaintsAssigned = resolver.complaintsAssigned;

        res.status(200).json({ complaintsAssigned });
    } catch (error) {
        res.status(400).json({error});
    }
}

const appendComplaintToResolver = async (req, res) => {
    try {
      const { resolverId } = req.params;
      const { complaint, realTimeStatus} = req.body; 
  
      const resolver = await Resolver.findById(resolverId);
      const complaintModel = await Complaint.findById(complaint.id);
  
      if (!resolver) {
        return res.status(404).json({ message: "Resolver not found" });
      }
  
      resolver.complaintsAssigned.push(complaint);
      await resolver.save();

      complaintModel.realTimeStatus.push(realTimeStatus);
      await complaintModel.save();
  
      res.status(200).json({ message: "Complaint appended to Resolver successfully and real time status sent" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
}

export { register, login, fetchAssignedComplaints, appendComplaintToResolver };
