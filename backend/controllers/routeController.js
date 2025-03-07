const mongoose = require("mongoose");
const Route = require("../models/DriRoute"); 
const Driver = require("../models/Driver");

let lastEmergency = null;

// Function to handle starting a route
exports.startRoute = async (req, res) => {
  try {
    const { driverDetails } = req.body;

    if (!driverDetails || Object.keys(driverDetails).length === 0) {
      return res.status(400).json({ message: "Driver details are required" });
    }

    const newRoute = new Route({
      driverDetails, 
      routeStartedAt: new Date(),
    });

    await newRoute.save();
    res.status(201).json({ message: "Route started successfully", route: newRoute });
  } catch (error) {
    console.error("Error starting route:", error);
    res.status(500).json({ message: "Failed to start route", error });
  }
};



// Function to handle ending a route
exports.endRoute = async (req, res) => {
  try {
    const { routeId } = req.body;

    if (!routeId) {
      return res.status(400).json({ message: "Route ID is required" });
    }

    const route = await Route.findById(routeId);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    route.routeEndedAt = new Date(); 
    await route.save();

    res.status(200).json({ message: "Route ended successfully", route });
  } catch (error) {
    console.error("Error ending route:", error);
    res.status(500).json({ message: "Failed to end route", error });
  }
};



// Your controller logic for emergency reporting
exports.reportEmergency = async (req, res) => {
  const { routeId, emergencyMessage, driverDetails } = req.body;

  try {
    const route = await Route.findById(routeId);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    // Add emergency to the route's emergencies array
    route.emergencies.push({
      emergencyMessage,
      driverDetails,
      timeReported: new Date(),
    });

    await route.save(); // Save the updated route
    res.status(200).json({ message: "Emergency reported successfully!" });
  } catch (error) {
    console.error("Error reporting emergency:", error);
    res.status(500).json({ message: "Failed to report emergency." });
  }
};




// Function to get all routes (for admin use)
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find(); 
    res.status(200).json(routes);
  } catch (error) {
    console.error("Error fetching routes:", error);
    res.status(500).json({ message: "Failed to fetch routes" });
  }
};



// Function to get the latest emergency for admin alert
exports.getLatestEmergency = async (req, res) => {
  if (lastEmergency) {
    res.status(200).json(lastEmergency);
    lastEmergency = null; 
  } else {
    res.status(204).send(); 
  }
};

// Fetch all routes for selection in DriverForm
exports.getRoutesForDrivers = async (req, res) => {
  try {
    const routes = await Route.find({}, "_id name"); 
    res.json(routes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching routes" });
  }
};

exports.getEmergencyReports = async (req, res) => {
  try {
    // Fetch routes with emergencies
    const routes = await Route.find({ "emergencies.0": { $exists: true } });

    if (!routes || routes.length === 0) {
      return res.status(404).json({ message: "No emergency reports found." });
    }

    // Map over routes and extract emergency details
    const emergencyReports = routes.map((route) => {
      return route.emergencies.map((emergency) => ({
        routeId: route._id,
        emergencyMessage: emergency.emergencyMessage || "Unknown",
        timeReported: emergency.timeReported ? new Date(emergency.timeReported).toLocaleString() : "Unknown",
        driverName: emergency.driverDetails?.name || "Unknown",
        driverEmail: emergency.driverDetails?.email || "Unknown",
        contact: emergency.driverDetails?.contact || "Unknown",
        licenseNumber: emergency.driverDetails?.licenseNumber || "Unknown",
        busNumber: emergency.driverDetails?.busDetails?.busNumber || "Unknown",
        nameplateNumber: emergency.driverDetails?.busDetails?.nameplateNumber || "Unknown",
      }));
    });

    // Flatten the nested array structure
    res.status(200).json(emergencyReports.flat());
  } catch (error) {
    console.error("Error fetching emergency reports:", error);
    res.status(500).json({ message: "Failed to fetch emergency reports." });
  }
};