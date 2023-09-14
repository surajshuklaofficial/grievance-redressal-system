import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    department: {type: String, required: true},
    complaintSpecificRequirements: [ String ],
    password: {type: String, required: true },
    accuracy: {type: Number, default: 0}
}) 

export default mongoose.model('Department', departmentSchema);