import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    departmentId: {type: 'string', required: true},
    department: {type: String, required: true},
    complainant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Complainant'
    },
    // complainant: {type: Object, required: true},
    complaintDescription: { type: String, required: true},
    complainantComplaintSpecificInfo: Object, // Dynamic data based on department's needs to resolve the problem
    resolutionStatus: {
      type: String,
      enum: ['Received', 'In Progress', 'Closed'],
      default: 'Received'
    },
    timestamps: {
      createdAt: { type: Date, default: Date.now },
      closedAt: { type: Date, default: null },
    },
    realTimeStatus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ComplaintState' }],
    urgency: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low'
    },
  });
  

export default mongoose.model('Complaint', complaintSchema);