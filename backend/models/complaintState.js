import mongoose from "mongoose";

import Resolver from "./resolver.js";

const complaintStateSchema = mongoose.Schema({
    complaintId: { type: mongoose.Schema.Types.ObjectId, required: true },
    resolverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resolver' },
    description: { type: String },
    resolvedAt: { type: Date },
    assignedAt: { type: Date, default: new Date() },
    message: { type: String },
    closingRequest: { type: Boolean, default: false },
});

export default mongoose.model('ComplaintState', complaintStateSchema);
