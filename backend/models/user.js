import mongoose from "mongoose";

import Complaint from "./complaint.js";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }],
});

export default mongoose.model("User", userSchema);
