const mongoose = require("mongoose");

const resolverSchema = mongoose.Schema({
  EmployeeId: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  complaintsAssigned: [Object],
});

const Resolver = mongoose.model("Resolver", resolverSchema);
module.exports = Resolver;
