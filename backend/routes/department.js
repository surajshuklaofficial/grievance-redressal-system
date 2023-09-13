import express from 'express';
import { addNewComplaintCategory } from '../controllers/department.js';

const router = express.Router();

router.post('/add-new-complaint-category', addNewComplaintCategory)

export default router;