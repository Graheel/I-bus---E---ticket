import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/DriverForm.css";

const DriverForm = ({ addDriver }) => {
  const [routes, setRoutes] = useState([]);
  const [driverData, setDriverData] = useState({
    name: "",
    email: "",
    licenseNumber: "",
    routeAssigned: "",
    busDetails: { busNumber: "", nameplateNumber: "" },
    contact: "",
  });

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get("https://i-bus-e-ticket-2.onrender.com/api/driver/driver-routes");
        setRoutes(response.data);
        setDriverData((prev) => ({
          ...prev,
          routeAssigned: response.data.length ? response.data[0].routeId : "",
        }));
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };
    fetchRoutes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("busDetails")) {
      const key = name.split(".")[1];
      setDriverData((prevState) => ({
        ...prevState,
        busDetails: { ...prevState.busDetails, [key]: value },
      }));
    } else {
      setDriverData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDriver(driverData);
    setDriverData({
      name: "",
      email: "",
      licenseNumber: "",
      routeAssigned: routes.length ? routes[0].routeId : "",
      busDetails: { busNumber: "", nameplateNumber: "" },
      contact: "",
    });
  };

  return (
    <form className="driver-form" onSubmit={handleSubmit}>
      <h3>Add New Driver</h3>

      <input type="text" name="name" placeholder="Name" value={driverData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={driverData.email} onChange={handleChange} required />
      <input type="text" name="licenseNumber" placeholder="License Number" value={driverData.licenseNumber} onChange={handleChange} required />

      {/* Route Dropdown - Showing Bus Numbers */}
      <select name="routeAssigned" value={driverData.routeAssigned} onChange={handleChange} required>
        {routes.map((route) => (
          <option key={route.routeId} value={route.routeId}>
            {route.routeId} - {route.busNumber}
          </option>
        ))}
      </select>

      <input type="text" name="busDetails.busNumber" placeholder="Bus Number" value={driverData.busDetails.busNumber} onChange={handleChange} required />
      <input type="text" name="busDetails.nameplateNumber" placeholder="Bus Nameplate Number" value={driverData.busDetails.nameplateNumber} onChange={handleChange} required />
      <input type="text" name="contact" placeholder="Contact" value={driverData.contact} onChange={handleChange} required />

      <button type="submit">Add Driver</button>
    </form>
  );
};

export default DriverForm;
