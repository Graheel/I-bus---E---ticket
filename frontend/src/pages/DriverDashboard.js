import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
import "./DriverDashboard.css";

const DriverDashboard = () => {
  const [routeStarted, setRouteStarted] = useState(false);
  const [emergencyMessage, setEmergencyMessage] = useState("");
  const [routeId, setRouteId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [routeStartTime, setRouteStartTime] = useState(null);
  const [routeEndTime, setRouteEndTime] = useState(null);
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loggedInEmail = localStorage.getItem("driverEmail") || sessionStorage.getItem("driverEmail");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchDriverDetails = async () => {
      if (!loggedInEmail) {
        console.warn("No logged-in email found!");
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get(`https://i-bus-e-ticket-2.onrender.com/api/driver/details?email=${loggedInEmail}`);
        if (response.data) {
          setDriver(response.data); 
        }
      } catch (error) {
        console.error("Error fetching driver details:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDriverDetails();
  }, [loggedInEmail]);

  const handleStartRoute = async () => {
    try {
      if (!driver) {
        alert("Driver details not available. Please log in again.");
        return;
      }
  
      const routeData = {
        driverDetails: {
          name: driver.name,
          email: driver.email,
          contact: driver.contact,
          licenseNumber: driver.licenseNumber,
          routeAssigned: driver.routeAssigned,
          busDetails: driver.busDetails,
        },
      };
  
      console.log("Sending Request Body with Actual Driver Details:", routeData);
  
      const response = await axios.post("https://i-bus-e-ticket-2.onrender.com/api/route/start", routeData);
      console.log("Route Started Successfully:", response.data);
  
      setRouteId(response.data.route._id); 
      setRouteStartTime(new Date(response.data.route.routeStartedAt)); 
      setRouteStarted(true);
  
      alert("Route started successfully!");
    } catch (error) {
      console.error("Error starting route:", error);
      alert("Failed to start route. Please try again.");
    }
  };
  
  

  const handleEndRoute = async () => {
    try {
      if (!routeId) {
        alert("Error: No active route found.");
        return;
      }
  
      const response = await axios.post("https://i-bus-e-ticket-2.onrender.com/api/route/end", { routeId });
      console.log("Response Data:", response.data);
  
      setRouteEndTime(new Date(response.data.route.routeEndedAt));
      setRouteStarted(false);
  
      alert("Route ended successfully!");
    } catch (error) {
      console.error("Error ending route:", error);
      alert("Failed to end route. Please try again.");
    }
  };
  const handleEmergencyReport = async () => {
    try {
      if (!routeId) {
        alert("Error: No active route found.");
        return;
      }
  
      if (!driver) {
        alert("Error: Driver details not found.");
        return;
      }
  
      const emergencyData = {
        routeId: routeId,
        emergencyMessage: emergencyMessage || "Emergency reported!",
        driverDetails: {
          name: driver.name,
          email: driver.email,
          licenseNumber: driver.licenseNumber,
          contact: driver.contact,
          routeAssigned: driver.routeAssigned,
          busDetails: driver.busDetails,
        },
      };
  
      const response = await axios.post("https://i-bus-e-ticket-2.onrender.com/api/route/emergency", emergencyData);
      console.log(response.data.message); 
      alert("Emergency reported successfully!");
      setEmergencyMessage(""); 
    } catch (error) {
      console.error("Error reporting emergency:", error);
      alert("Failed to report emergency. Please try again.");
    }
  };

  const handleExit = () => {
    localStorage.removeItem("driverEmail");
    sessionStorage.removeItem("driverEmail");
    navigate("/login-register"); 
  };
  

  return (
    <div className="driver-dashboard">
      <h1>Driver Dashboard</h1>

      <div className="current-time">
        <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
      </div>

      <div className="exit-section">
  <button onClick={handleExit} className="exit-btn">
    Exit
  </button>
</div>

      <div className="button-section">
        <button onClick={handleStartRoute} className="start-route-btn" disabled={routeStarted}>
          {routeStarted ? "Route In Progress" : "Start Route"}
        </button>
        <button onClick={handleEndRoute} className="end-route-btn" disabled={!routeStarted}>
          End Route
        </button>
      </div>

      {routeStartTime && (
  <div>
    <h3>Route Started At: {routeStartTime.toLocaleString()}</h3>
  </div>
)}

{routeEndTime && (
  <div>
    <h3>Route Ended At: {routeEndTime.toLocaleString()}</h3>
  </div>
)}

      {loading ? (
        <p>Loading driver details...</p>
      ) : driver ? (
        <div className="driver-info">
          <p><strong>Name:</strong> {driver.name}</p>
          <p><strong>Email:</strong> {driver.email}</p>
          <p><strong>License Number:</strong> {driver.licenseNumber}</p>
          <p><strong>Contact:</strong> {driver.contact}</p>
          <p><strong>Assigned Route:</strong> {driver.routeAssigned}</p>
          <p><strong>Bus Assigned:</strong> {driver.busDetails?.nameplateNumber || "Not Assigned"}</p>
        </div>
      ) : (
        <p>No driver data found for your account.</p>
      )}

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
