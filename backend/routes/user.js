import express from 'express';

import { fetchUserInfo } from '../controllers/user.js';

const router = express.Router();

router.get('/:userId/profile', fetchUserInfo);

export default router;