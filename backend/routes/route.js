const express = require("express");
const router = express.Router();
const routeController = require("../controllers/routeController");

router.post("/start", routeController.startRoute);
router.post("/end", routeController.endRoute);
router.post("/emergency", routeController.reportEmergency); // Only this definition is needed
router.get("/all", routeController.getAllRoutes);
router.get("/emergency-reports", routeController.getEmergencyReports);
router.get("/latest-emergency", routeController.getLatestEmergency);
router.get("/driver-routes", routeController.getRoutesForDrivers);

router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRoute = await Route.findByIdAndDelete(id);
  
      if (!deletedRoute) {
        return res.status(404).json({ message: "Route not found" });
      }
  
      res.status(200).json({ message: "Route deleted successfully", route: deletedRoute });
    } catch (error) {
      console.error("Error deleting route:", error);
      res.status(500).json({ message: "Failed to delete route", error });
    }
  });
  

module.exports = router;
