import express from "express";

import { fetchUserInfo } from "../controllers/user.js";
import authentication from "../middlerware/authentication.js";

const router = express.Router();

router.get("/profile", authentication, fetchUserInfo);

export default router;
