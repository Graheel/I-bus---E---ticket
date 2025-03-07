import React, { useState, useEffect } from "react";
import axios from "axios";
import DriverForm from "./DriverForm";
import DriverList from "./DriverList";
import "./styles/DriverManagement.css";

const DriverManagement = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("https://i-bus-e-ticket-2.onrender.com/api/driver");
        setDrivers(response.data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };
    fetchDrivers();
  }, []);

  const addDriver = async (driver) => {
    try {
      const response = await axios.post("https://i-bus-e-ticket-2.onrender.com/api/driver", driver);
      setDrivers([...drivers, response.data.driver]);
      alert("Driver added successfully!");
    } catch (error) {
      console.error("Error adding driver:", error);
    }
  };

  const updateDriver = async (updatedDriver) => {
    try {
      await axios.put(`http://localhost:5000/api/driver/${updatedDriver._id}`, updatedDriver);
      setDrivers(drivers.map((driver) => (driver._id === updatedDriver._id ? updatedDriver : driver)));
      alert("Driver updated successfully!");
    } catch (error) {
      console.error("Error updating driver:", error);
    }
  };

  const deleteDriver = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/driver/${id}`);
      setDrivers(drivers.filter((driver) => driver._id !== id));
      alert("Driver deleted successfully!");
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
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
