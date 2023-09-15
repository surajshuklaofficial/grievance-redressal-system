import mongoose from "mongoose";

const resolverSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  complaintsAssigned: [Object],
});

export default mongoose.model("Resolver", resolverSchema);