import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    department: {type: "string", required: true},
    complaintCategories: [ String ]
}) 

export default mongoose.model('Department', departmentSchema);