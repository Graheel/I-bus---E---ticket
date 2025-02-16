// BusManagement.js
import React, { useState, useEffect } from "react";
import BusForm from "./BusForm";
import BusList from "./BusList";
import "./styles/BusManagement.css";

const BusManagement = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch buses from backend or use dummy data
    const dummyBuses = [
      {
        id: 1,
        uniqueNumber: "BUS-001",
        route: "Route A",
        driver: "John Doe",
        conductor: "Jane Smith",
        timings: "08:00 AM - 05:00 PM",
      },
      // Add more buses as needed
    ];
    setBuses(dummyBuses);
  }, []);

  const addBus = (bus) => {
    setBuses([...buses, { ...bus, id: Date.now() }]);
  };

  const updateBus = (updatedBus) => {
    setBuses(buses.map((bus) => (bus.id === updatedBus.id ? updatedBus : bus)));
  };

  const deleteBus = (id) => {
    setBuses(buses.filter((bus) => bus.id !== id));
  };

  return (
    <div className="bus-management">
      <h2>Bus Management</h2>
      <BusForm addBus={addBus} />
      <BusList buses={buses} updateBus={updateBus} deleteBus={deleteBus} />
    </div>
  );
};

export default BusManagement;
