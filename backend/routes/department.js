import express from "express";
import { loginDepartment, registerNewDepartment, fetchComplaintsByDepartment } from "../controllers/department.js";

const router = express.Router();

router.post('/auth/admin/register', registerNewDepartment)
    .post('/auth/admin/login', loginDepartment)
    .get('/:departmentID/admin/dashboard/complaints', fetchComplaintsByDepartment);

export default router;