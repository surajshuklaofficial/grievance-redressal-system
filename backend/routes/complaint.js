import express from 'express';

import { sendComplaint, fetchComplaints } from '../controllers/complaints.js';

const router = express.Router();

router.post('/send', sendComplaint)
    .get('/:departmentID/dashboard', fetchComplaints);

export default router;