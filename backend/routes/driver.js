const express = require("express");
const router = express.Router();
const Route = require("../models/iBusRoutes");
const {
  getAllDrivers,
  addDriver,
  updateDriver,
  deleteDriver,
  getDriverByEmail,
} = require("../controllers/driverController");

router.get("/", getAllDrivers);
router.post("/", addDriver);
router.put("/:id", updateDriver);
router.delete("/:id", deleteDriver);
router.get("/details", getDriverByEmail);
router.get("/driver-routes", async (req, res) => {
  try {
    const routes = await Route.find(); // ✅ Correct variable name
    res.json(routes);
  } catch (error) {
    console.error("Error fetching driver routes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
