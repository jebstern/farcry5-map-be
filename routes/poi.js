const express = require("express");
const router = express.Router();
const controller = require("../controllers/poi");

router.put("/toggle", controller.toggle);
router.get("/all", controller.all);

module.exports = router;
