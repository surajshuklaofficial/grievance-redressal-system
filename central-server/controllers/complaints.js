import Complaint from "../models/complaint.js";
import Department from "../models/department.js";
import User from "../models/user.js";

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

const getComplaintDetails = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const user = await User.findOne({ email: userEmail });
    const complaints_id_array = user.complaints;

    // Use Promise.all to wait for all promises to resolve
    const details = await Promise.all(
      complaints_id_array.map(async (id) => {
        console.log("Fetching complaint:", id);
        const cd = await Complaint.findOne({ _id: id });
        return cd;
      })
    );

    res.json(details);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const complaintCloseRequest = async (req, res) => {
  try {
      const complaint = await Complaint.findById(req.params.complaintId);
      complaint.resolutionStatus = "CLOSED";
      await complaint.save();
      res.status(200).json(complaint);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export {
  sendComplaint,
  fetchComplaints,
  getAComplaint,
  getComplaintDetails,
  complaintCloseRequest
};
