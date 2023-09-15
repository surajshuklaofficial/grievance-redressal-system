import express from "express";

import {
  sendComplaint,
  fetchComplaints,
  getAComplaint,
  getComplaintDetails,
  complaintCloseRequest
} from "../controllers/complaints.js";

import authentication from "../middlerware/authentication.js";

const router = express.Router();

router.post("/send", authentication, sendComplaint);
router.get("/complaintdetails", authentication, getComplaintDetails);
router.get("/:complaintId", authentication, getAComplaint);
router.get("/:departmentID/dashboard", authentication, fetchComplaints);
router.post("/:complaintId/complaint-close-request", complaintCloseRequest)

export default router;