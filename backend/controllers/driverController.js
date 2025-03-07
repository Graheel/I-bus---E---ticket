const Driver = require("../models/Driver");
const Route = require("../models/DriRoute");
const iBusRoute = require("../models/iBusRoutes"); 

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new driver
exports.addDriver = async (req, res) => {
  try {
    const { name, email, licenseNumber, routeAssigned, busDetails, contact } = req.body;

    // Check if driver email already exists
    const existingDriver = await Driver.findOne({ email });
    if (existingDriver) {
      return res.status(400).json({ message: "Driver already exists with this email" });
    }

    const newDriver = new Driver({ name, email, licenseNumber, routeAssigned, busDetails, contact });
    await newDriver.save();
    res.status(201).json({ driver: newDriver });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get driver details by email
exports.getDriverByEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const driver = await Driver.findOne({ email });
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json(driver);
  } catch (err) {
    res.status(500).json({ message: "Error fetching driver details" });
  }
};

// Update driver details
exports.updateDriver = async (req, res) => {
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ driver: updatedDriver });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete driver
exports.deleteDriver = async (req, res) => {
  try {
    await Driver.findByIdAndDelete(req.params.id);
    res.json({ message: "Driver deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};