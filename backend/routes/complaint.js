const express = require("express");

const {
  sendComplaint,
  fetchComplaints,
  getAComplaint,
} = require("../controllers/complaints.js");
const authentication = require("../middlerware/authentication.js");

const router = express.Router();

router.post("/send", authentication, sendComplaint);
router.get("/:complaintId", authentication, getAComplaint);
router.get("/:departmentID/dashboard", authentication, fetchComplaints);

module.exports = router;
