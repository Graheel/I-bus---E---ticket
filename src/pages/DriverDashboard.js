import React, { useState } from "react";
import "./DriverDashboard.css";

const DriverDashboard = () => {
  const [routeStarted, setRouteStarted] = useState(false);
  const [driverInfo, setDriverInfo] = useState({ name: "", license: "", busNumber: "" });
  const [routeDetails, setRouteDetails] = useState({ start: "", end: "", location: "" });
  const [emergencyMessage, setEmergencyMessage] = useState("");

  const handleStartRoute = () => {
    setRouteStarted(true);
    alert("Route started! Tracking time now.");
  };

  const handleEndRoute = () => {
    setRouteStarted(false);
    alert("Route ended! Tracking stopped.");
  };

  const handleInfoChange = (e) => {
    setDriverInfo({ ...driverInfo, [e.target.name]: e.target.value });
  };

  const handleRouteChange = (e) => {
    setRouteDetails({ ...routeDetails, [e.target.name]: e.target.value });
  };

  const handleEmergencyReport = () => {
    alert(`Emergency reported: ${emergencyMessage}`);
    setEmergencyMessage("");
  };

  const handleSaveDriverDetails = () => {
    alert("Driver details saved!");
  };

  const handleSaveRouteDetails = () => {
    alert("Route details saved!");
  };

  return (
    <div className="driver-dashboard">
      <h1>Driver Dashboard</h1>

      {/* Start and End Route Buttons */}
      <button onClick={handleStartRoute} className="start-route-btn" disabled={routeStarted}>
        {routeStarted ? "Route In Progress" : "Start Route"}
      </button>
      <button onClick={handleEndRoute} className="end-route-btn" disabled={!routeStarted}>
        End Route
      </button>

      {/* Driver Info Form */}
      <div className="form-section">
        <h2>Driver Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={driverInfo.name}
          onChange={handleInfoChange}
          required
        />
        <input
          type="text"
          name="license"
          placeholder="License Number"
          value={driverInfo.license}
          onChange={handleInfoChange}
          required
        />
        <input
          type="text"
          name="busNumber"
          placeholder="Bus Number"
          value={driverInfo.busNumber}
          onChange={handleInfoChange}
          required
        />
        <input type="file" name="documents" accept="image/*,.pdf" />
        <button onClick={handleSaveDriverDetails} className="save-details-btn">
          Save Driver Details
        </button>
      </div>

      {/* Route Details Form */}
      <div className="form-section">
        <h2>Route Details</h2>
        <input
          type="text"
          name="start"
          placeholder="Start Location"
          value={routeDetails.start}
          onChange={handleRouteChange}
          required
        />
        <input
          type="text"
          name="end"
          placeholder="End Location"
          value={routeDetails.end}
          onChange={handleRouteChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Live Location Link"
          value={routeDetails.location}
          onChange={handleRouteChange}
          required
        />
        <button onClick={handleSaveRouteDetails} className="save-details-btn">
          Save Route Details
        </button>
      </div>

      {/* Emergency Reporting */}
      <div className="form-section">
        <h2>Emergency Report</h2>
        <textarea
          placeholder="Describe emergency..."
          value={emergencyMessage}
          onChange={(e) => setEmergencyMessage(e.target.value)}
        />
        <button onClick={handleEmergencyReport} className="emergency-btn">
          Report Emergency
        </button>
      </div>
    </div>
  );
};

export default DriverDashboard;
