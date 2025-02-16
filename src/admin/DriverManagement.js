// DriverManagement.js
import React, { useState, useEffect } from "react";
import DriverForm from "./DriverForm";
import DriverList from "./DriverList";
import "./styles/DriverManagement.css";

const DriverManagement = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Fetch drivers from backend or use dummy data
    const dummyDrivers = [
      {
        id: 1,
        name: "John Doe",
        busAssigned: "BUS-001",
        contact: "1234567890",
        status: "On Time",
      },
      // Add more drivers as needed
    ];
    setDrivers(dummyDrivers);
  }, []);

  const addDriver = (driver) => {
    setDrivers([...drivers, { ...driver, id: Date.now() }]);
  };

  const updateDriver = (updatedDriver) => {
    setDrivers(
      drivers.map((driver) => (driver.id === updatedDriver.id ? updatedDriver : driver))
    );
  };

  const deleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };

  return (
    <div className="driver-management">
      <h2>Driver Management</h2>
      <DriverForm addDriver={addDriver} />
      <DriverList drivers={drivers} updateDriver={updateDriver} deleteDriver={deleteDriver} />
    </div>
  );
};

export default DriverManagement;
