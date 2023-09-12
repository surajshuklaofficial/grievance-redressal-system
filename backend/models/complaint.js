import mongoose from "mongoose";

import ComplaintState from "./complaintState.js";
import Complainant from "./complainant.js";

const complaintSchema = new mongoose.Schema({
    categoryId: String,
    category: String,
    complainant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Complainant'
    },
    complaintDescription: String,
    complainantComplaintSpecificInfo: Object, // Dynamic data based on department's needs to resolve the problem
    resolutionStatus: {
      type: String,
      enum: ['Received', 'In Progress', 'Closed'],
    },
    timestamps: {
      createdAt: { type: Date, default: Date.now },
      closedAt: { type: Date, default: Date.now },
    },
    realTimeStatus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ComplaintState' }],
    urgency: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
    },
  });
  

export default mongoose.model('Complaint', complaintSchema);