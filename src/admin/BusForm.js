// BusForm.js
import React, { useState } from "react";
import "./styles/BusForm.css";

const BusForm = ({ addBus }) => {
  const [busData, setBusData] = useState({
    uniqueNumber: "",
    route: "",
    driver: "",
    conductor: "",
    timings: "",
  });

  const handleChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBus(busData);
    setBusData({
      uniqueNumber: "",
      route: "",
      driver: "",
      conductor: "",
      timings: "",
    });
  };

  return (
    <form className="bus-form" onSubmit={handleSubmit}>
      <h3>Add New Bus</h3>
      <input
        type="text"
        name="uniqueNumber"
        placeholder="Unique Number"
        value={busData.uniqueNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="route"
        placeholder="Route"
        value={busData.route}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="driver"
        placeholder="Driver Name"
        value={busData.driver}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="conductor"
        placeholder="Conductor Name"
        value={busData.conductor}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="timings"
        placeholder="Timings"
        value={busData.timings}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Bus</button>
    </form>
  );
};

export default BusForm;
