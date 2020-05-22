const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location");

router.put("/toggle", locationController.toggle);
router.get("/locations", locationController.locations);

module.exports = router;
