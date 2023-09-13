import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    AdminId: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
}) 

export default mongoose.model('Admin', adminSchema);