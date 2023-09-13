import express from "express";

import {
  sendComplaint,
  fetchComplaints,
  getAComplaint,
} from "../controllers/complaints.js";
import authentication from "../middlerware/authentication.js";

const router = express.Router();

router
  .post("/send", authentication, sendComplaint)
  .get("/:complaintId", authentication, getAComplaint)
  .get("/:departmentID/dashboard", authentication, fetchComplaints);

export default router;