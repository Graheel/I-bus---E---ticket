const Bus = require("../models/Bus");  

// ✅ Add a new bus
exports.addBus = async (req, res) => {
  try {
    const { uniqueNumber, nameplateNumber, route, driver } = req.body;
    const newBus = new Bus({ uniqueNumber, nameplateNumber, route, driver, timings: "08:00 AM - 09:00 PM" });
    await newBus.save();
    res.status(201).json({ message: "Bus added successfully", bus: newBus });
  } catch (error) {
    console.error("Error adding bus:", error);
    res.status(500).json({ message: "Failed to add bus", error });
  }
};

// ✅ Get all buses
exports.getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    console.error("Error fetching buses:", error);
    res.status(500).json({ message: "Failed to fetch buses", error });
  }
};

// ✅ Get buses by route
exports.getBusesByRoute = async (req, res) => {
  try {
    const { route } = req.params;
    const buses = await Bus.find({ route });

    if (buses.length === 0) {
      return res.status(404).json({ message: "No buses found for this route" });
    }

    res.status(200).json(buses);
  } catch (error) {
    console.error("Error fetching buses by route:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Update a bus
exports.updateBus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBus = await Bus.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBus) return res.status(404).json({ message: "Bus not found" });
    res.status(200).json({ message: "Bus updated successfully", bus: updatedBus });
  } catch (error) {
    console.error("Error updating bus:", error);
    res.status(500).json({ message: "Failed to update bus", error });
  }
};

// ✅ Delete a bus
exports.deleteBus = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBus = await Bus.findByIdAndDelete(id);
    if (!deletedBus) return res.status(404).json({ message: "Bus not found" });
    res.status(200).json({ message: "Bus deleted successfully" });
  } catch (error) {
    console.error("Error deleting bus:", error);
    res.status(500).json({ message: "Failed to delete bus", error });
  }
};
