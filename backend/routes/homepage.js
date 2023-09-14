const express = require("express");
const { greet, addNewDepartment } = require("../controllers/department.js");

const router = express.Router();

router.get("/", greet);
router.post("/add-new-department", addNewDepartment);

module.exports = router;
