const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  department: { type: String, required: true },
  complaintSpecificRequirements: [String],
  accuracy: { type: Number, default: 0 },
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
