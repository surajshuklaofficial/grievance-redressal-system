import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    department: {type: "string", required: true},
    complaintSpecificRequirements: [ String ]
}) 

export default mongoose.model('Department', departmentSchema);