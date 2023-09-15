import express from 'express';

import { register, login, fetchAssignedComplaints, appendComplaintToResolver } from '../controllers/resolver.js';

const router = express.Router();

router.post('/auth/register', register)
    .post('/auth/login', login)
    .get('/:resolverId/complaints/assigned', fetchAssignedComplaints)
    .post('/:resolverId/complaint/forward', appendComplaintToResolver);

export default router;