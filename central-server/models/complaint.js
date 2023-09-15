import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    departmentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true},
    department: {type: String, required: true},
    complainant: {type: Object, required: true},
    complaintDescription: { type: String, required: true},
    complainantComplaintSpecificInfo: Object, // Dynamic data based on department's needs to resolve the problem
    resolutionStatus: {
      type: String,
      enum: ['RECEIVED', 'INPROGRESS', 'CLOSED'],
      default: 'RECEIVED',
    },
    timestamps: {
      createdAt: { type: Date, default: Date.now },
      closedAt: { type: Date, default: null },
    },
    realTimeStatus: [],
    urgency: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH'],
      default: 'LOW'
    },
  });
  

export default mongoose.model("Complaint", complaintSchema);
