import express from "express";
import { loginDepartment, registerNewDepartment, fetchComplaintsByDepartment, fetchComplaintsCountByDepartment } from "../controllers/department.js";

const router = express.Router();

router.post('/auth/admin/register', registerNewDepartment)
    .post('/auth/admin/login', loginDepartment)
    .get('/:departmentID/admin/dashboard/complaints/count', fetchComplaintsCountByDepartment)
    .get('/:departmentID/admin/dashboard/complaints', fetchComplaintsByDepartment)

export default router;