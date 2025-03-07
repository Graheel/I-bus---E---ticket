const mongoose = require("mongoose");

const iBusRouteSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
  routeId: { type: String, required: true, unique: true },
  busNumber: { type: String, required: true },
});

module.exports = mongoose.model("iBusRoutes", iBusRouteSchema);
