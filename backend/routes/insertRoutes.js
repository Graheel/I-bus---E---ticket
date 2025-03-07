const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables
const iBusRoute = require("../models/iBusRoutes");

// MongoDB URI
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ibus";

// Predefined routes with ObjectId
const predefinedRoutes = [
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-A", busNumber: "Bus 101" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-B", busNumber: "Bus 102" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-C", busNumber: "Bus 103" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-D", busNumber: "Bus 104" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-E", busNumber: "Bus 105" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-F", busNumber: "Bus 106" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-G", busNumber: "Bus 107" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-H", busNumber: "Bus 108" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-I", busNumber: "Bus 109" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-J", busNumber: "Bus 110" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-K", busNumber: "Bus 111" },
  { _id: new mongoose.Types.ObjectId(), routeId: "ROUTE-L", busNumber: "Bus 112" },
];

// Insert routes into MongoDB
const insertRoutes = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to MongoDB");

    await iBusRoute.insertMany(predefinedRoutes);
    console.log("✅ Routes inserted successfully!");

  } catch (error) {
    console.error("❌ Error inserting routes:", error);
  } finally {
    mongoose.connection.close();
  }
};

insertRoutes();
