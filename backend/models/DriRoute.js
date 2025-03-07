const mongoose = require("mongoose");

const driverDetailsSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  contact: { type: String },
  licenseNumber: { type: String },
  routeAssigned: { type: String },
  busDetails: {
    busNumber: { type: String },
    nameplateNumber: { type: String },
  },
});

const routeSchema = new mongoose.Schema({
  routeStartedAt: { type: Date },
  routeEndedAt: { type: Date },
  driverDetails: driverDetailsSchema, 
  emergencies: [
    {
      emergencyMessage: { type: String },
      driverDetails: driverDetailsSchema,
      timeReported: { type: Date },
    },
  ],
});

module.exports = mongoose.model("Route", routeSchema);
