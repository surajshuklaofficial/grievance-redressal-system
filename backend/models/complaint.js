const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  department: { type: String, required: true },
  complaintDescription: { type: String, required: true },
  complainantComplaintSpecificInfo: Object, // Dynamic data based on department's needs to resolve the problem
  resolutionStatus: {
    type: String,
    enum: ["Received", "In Progress", "Closed"],
    default: "Received",
  },
  timestamps: {
    createdAt: { type: Date, default: Date.now },
    closedAt: { type: Date, default: null },
  },
  realTimeStatus: [
    { type: mongoose.Schema.Types.ObjectId, ref: "ComplaintState" },
  ],
  urgency: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
