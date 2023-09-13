import express from "express";
import { greet, addNewDepartment } from "../controllers/department.js";

const router = express.Router();

router.get('/', greet)
    .post('/add-new-department', addNewDepartment);

export default router;