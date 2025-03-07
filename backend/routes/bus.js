const express = require("express");
const router = express.Router();
const busController = require("../controllers/busController");

router.post("/add", busController.addBus);
router.get("/all", busController.getBuses);
router.get("/:route", busController.getBusesByRoute);
router.put("/update/:id", busController.updateBus);
router.delete("/delete/:id", busController.deleteBus);

module.exports = router;
