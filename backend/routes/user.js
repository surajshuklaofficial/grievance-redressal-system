const express = require("express");

const { fetchUserInfo } = require("../controllers/user.js");
const authentication = require("../middlerware/authentication.js");

const router = express.Router();

router.get("/profile", authentication, fetchUserInfo);

module.exports = router;
