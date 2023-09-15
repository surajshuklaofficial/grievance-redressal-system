import express from "express";
import { loginDepartment, registerNewDepartment, fetchComplaintsByDepartment, fetchComplaintsCountByDepartment, fetchResolvers } from "../controllers/department.js";

const router = express.Router();

router.post('/auth/admin/register', registerNewDepartment)
    .post('/auth/admin/login', loginDepartment)
    .get('/:departmentID/admin/dashboard/complaints/count', fetchComplaintsCountByDepartment)
    .get('/:departmentID/admin/dashboard/complaints', fetchComplaintsByDepartment)
    .get('/admin/dashboard/resolver', fetchResolvers)

export default router;