const express = require("express");

const NLP = require("../controllers/NLP.js");

const router = express.Router();

router.post("/listen", NLP);

module.exports = router;
