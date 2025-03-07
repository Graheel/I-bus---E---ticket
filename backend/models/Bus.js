const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  uniqueNumber: { type: String, required: true, unique: true },
  nameplateNumber: { type: String, required: true },
  route: { type: String, required: true },
  driver: { type: String, required: true },
  timings: { type: String, default: "08:00 AM - 09:00 PM" }, 
});

module.exports = mongoose.model("Bus", BusSchema);
