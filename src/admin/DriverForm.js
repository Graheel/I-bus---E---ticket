// DriverForm.js
import React, { useState } from "react";
import "./styles/DriverForm.css";

const DriverForm = ({ addDriver }) => {
  const [driverData, setDriverData] = useState({
    name: "",
    busAssigned: "",
    contact: "",
    status: "",
  });

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDriver(driverData);
    setDriverData({
      name: "",
      busAssigned: "",
      contact: "",
      status: "",
    });
  };

  return (
    <form className="driver-form" onSubmit={handleSubmit}>
      <h3>Add New Driver</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={driverData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="busAssigned"
        placeholder="Bus Assigned"
        value={driverData.busAssigned}
        onChange={handleChange}
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={driverData.contact}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={driverData.status}
        onChange={handleChange}
      />
      <button type="submit">Add Driver</button>
    </form>
  );
};

export default DriverForm;
