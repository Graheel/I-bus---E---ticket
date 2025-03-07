const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  licenseNumber: { type: String, required: true },
  routeAssigned: { type: String, required: true }, 
  busDetails: {
    busNumber: { type: String, required: true },
    nameplateNumber: { type: String, required: true },
  },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Driver", driverSchema);
