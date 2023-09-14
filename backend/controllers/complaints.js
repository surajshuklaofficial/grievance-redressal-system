const Complaint = require("../models/complaint.js");
const Department = require("../models/department.js");
const User = require("../models/user.js");

const sendComplaint = async (req, res) => {
  try {
    const { department, complaintDescription } = req.body;
    const newdepartment = await Department.findOne({ department });
    const departmentId = newdepartment._id;
    console.log("auth", req.user);

    const user = await User.findOne({ email: req.user.email });
    console.log(user);

    const newComplaint = new Complaint({
      departmentId,
      userId: user._Id,
      department,
      complaintDescription,
    });

    await newComplaint.save();
    user.complaints.push(newComplaint._id);
    await user.save();
    res.status(202).json(newComplaint);
  } catch (error) {
    console.error("Error saving complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchComplaints = async (req, res) => {
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

const getAComplaint = async (req, res) => {
  try {
    const complaintId = req.params.complaintId;
    const complaint = await Complaint.findOne({ _id: complaintId });
    return res.status(202).json(complaint);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  sendComplaint,
  fetchComplaints,
  getAComplaint,
};
