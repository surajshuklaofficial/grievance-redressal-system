import mongoose from "mongoose";

const complainantSchema = mongoose.Schema({
    Name: { type: String, required: true},
    Email: { type: String, required: true },
    Password: { type: String, required: true},
    ContactNumber: { type: String, required: true}
}) 

export default mongoose.model('Complainant', complainantSchema);