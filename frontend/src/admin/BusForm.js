import React, { useState } from "react";
import "./styles/BusForm.css";
import axios from "axios";

const BusForm = ({ addBus }) => {
  const [busData, setBusData] = useState({
    uniqueNumber: "",
    nameplateNumber: "",
    route: "ROUTE-A",
    driver: "",
    timings: "08:00 AM - 09:00 PM", 
  });

  const [message, setMessage] = useState(""); 
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

    try {
      const response = await axios.post("http://localhost:5000/api/bus/add", busData); 
      addBus(response.data);
      setMessage("Bus added successfully! ✅");
      setMessageType("success");

      // Clear form fields after success
      setBusData({
        uniqueNumber: "",
        nameplateNumber: "",
        route: "ROUTE-A",
        driver: "",
        timings: "08:00 AM - 09:00 PM",
      });

      // Hide success message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error adding bus:", error);
      setMessage("Failed to add bus ❌");
      setMessageType("error");

      // Hide error message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <form className="bus-form" onSubmit={handleSubmit}>
      <h3>Add New Bus</h3>

      {message && <p className={`alert ${messageType}`}>{message}</p>} {/* ✅ Show success/error message */}

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
        name="nameplateNumber"
        placeholder="Bus Nameplate Number"
        value={busData.nameplateNumber}
        onChange={handleChange}
        required
      />
      <select name="route" value={busData.route} onChange={handleChange} required>
        {Array.from({ length: 12 }, (_, i) => `ROUTE-${String.fromCharCode(65 + i)}`).map((route) => (
          <option key={route} value={route}>
            {route}
          </option>
        ))}
      </select>
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
        name="timings"
        value="08:00 AM - 09:00 PM"
        readOnly
      />
      <button type="submit">Add Bus</button>
    </form>
  );
};

export default BusForm;
