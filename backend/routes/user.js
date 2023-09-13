import express from "express";

import { fetchUserInfo } from "../controllers/user.js";

const router = express.Router();

router.get("/profile", fetchUserInfo);

export default router;
