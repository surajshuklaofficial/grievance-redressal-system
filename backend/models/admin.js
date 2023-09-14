const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  AdminId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User=mongoose.model("Admin", adminSchema);
module.exports=User