import express from "express";

import { NLP } from "../controllers/NLP.js";

const router = express.Router();

router.post("/listen", NLP);

export default router;