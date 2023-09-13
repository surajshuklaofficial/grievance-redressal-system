import { rmSync } from "fs";
import Complaint from "../models/complaint.js";
import Department from "../models/department.js";
import User from "../models/user.js";

export const sendComplaint = async (req, res) => {
  try {
    const { department, complaintDescription } = req.body;
    const newdepartment = await Department.findOne({ department });
    const departmentId = newdepartment._id;

    const user = await User.findOne({ email: req.user.email });

    const newComplaint = new Complaint({
      departmentId,
      userId: user._id,
      department,
      complaintDescription,
    });

    await newComplaint.save();
    await user.complaints.push(newComplaint._id);
    res.status(202).json(newComplaint);
  } catch (error) {
    console.error("Error saving complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      departmentId: req.params.departmentID,
    }).sort({ "timestamps.createdAt": 1 });
    res.status(200).json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAComplaint = async (req, res) => {
  try {
    const complaintId = req.params.complaintId;
    const complaint = await Complaint.findOne({ _id: complaintId });
    return res.status(202).json(complaint);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
