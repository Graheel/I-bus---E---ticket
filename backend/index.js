const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/tickets");
const paymentRoutes = require("./routes/payment");
const contactRoutes = require("./routes/contact");
const routeRoutes = require("./routes/route");
const busRoutes = require("./routes/bus"); 
const driverRoutes = require("./routes/driver"); 

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
}));

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/driver", driverRoutes);

// Default root route
app.get("/", (req, res) => {
  res.send("🚍 iBus E-Ticket Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
