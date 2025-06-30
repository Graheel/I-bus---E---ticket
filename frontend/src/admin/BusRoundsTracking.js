import React, { useState, useEffect } from "react";
import "./styles/BusStatus.css";

const BusStatus = () => {
  const [busStatus, setBusStatus] = useState([]);

  useEffect(() => {
    const fetchBusStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/route/all");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Bus Status:", data);
        setBusStatus(data);
      } catch (error) {
        console.error("Error fetching bus status data:", error);
      }
    };

    fetchBusStatus();
  }, []);

  // Function to delete a bus status locally
  const handleDelete = (id) => {
    const updatedBusStatus = busStatus.filter((status) => status._id !== id);
    setBusStatus(updatedBusStatus);
    alert("Bus status deleted from the page!");
  };

  return (
    <div className="bus-status">
      <h2>Bus Status</h2>
      <div className="table-container"> {/* Wrapped table in a scrollable container */}
        <table>
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>License Number</th>
              <th>Route Assigned</th>
              <th>Bus Number</th>
              <th>Nameplate Number</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {busStatus.length > 0 ? (
              busStatus.map((status, index) => {
                const driverDetails = status.driverDetails || {};

                return (
                  <tr key={index}>
                    <td>{driverDetails.name || "Data Missing"}</td>
                    <td>{driverDetails.email || "Data Missing"}</td>
                    <td>{driverDetails.contact || "Data Missing"}</td>
                    <td>{driverDetails.licenseNumber || "Data Missing"}</td>
                    <td>{driverDetails.routeAssigned || "Data Missing"}</td>
                    <td>{driverDetails.busDetails?.busNumber || "Data Missing"}</td>
                    <td>{driverDetails.busDetails?.nameplateNumber || "Data Missing"}</td>
                    <td>
                      {status.routeStartedAt
                        ? new Date(status.routeStartedAt).toLocaleString()
                        : "Data Missing"}
                    </td>
                    <td>
                      {status.routeEndedAt
                        ? new Date(status.routeEndedAt).toLocaleString()
                        : "Data Missing"}
                    </td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(status._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusStatus;
