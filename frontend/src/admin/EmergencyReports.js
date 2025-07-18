import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/EmergencyReports.css";

const EmergencyReports = () => {
  const [reports, setReports] = useState([]);
  const [lastAlertId, setLastAlertId] = useState(null);

  useEffect(() => {
    const fetchEmergencyReports = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/route/emergency-reports");
        console.log("API Response:", response.data);

        if (response.data) {
          const newReports = response.data;

          newReports.forEach((report) => {
            if (report.routeId !== lastAlertId) {
              alert(
                `🚨 Emergency Alert! 🚨\n\nDriver: ${report.driverName || "Not Available"}\nBus: ${report.busNumber || "Not Available"}\nMessage: ${report.emergencyMessage || "Not Available"}`
              );
              setLastAlertId(report.routeId);
            }
          });

          setReports(newReports);
          console.log("Reports updated:", response.data);
        }
      } catch (error) {
        console.error("Error fetching emergency reports:", error);
      }
    };

    const interval = setInterval(fetchEmergencyReports, 1000);

    return () => clearInterval(interval);
  }, [lastAlertId]);

  return (
    <div className="emergency-reports">
      <h2>Emergency Reports</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Route ID</th>
              <th>Driver Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>License Number</th>
              <th>Bus Number</th>
              <th>Nameplate Number</th>
              <th>Emergency Messages</th>
              <th>Time Reported</th>
            </tr>
          </thead>
          <tbody>
            {reports.length > 0 ? (
              reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.routeId || "Not Available"}</td>
                  <td>{report.driverName || "Not Available"}</td>
                  <td>{report.driverEmail || "Not Available"}</td>
                  <td>{report.contact || "Not Available"}</td>
                  <td>{report.licenseNumber || "Not Available"}</td>
                  <td>{report.busNumber || "Not Available"}</td>
                  <td>{report.nameplateNumber || "Not Available"}</td>
                  <td>{report.emergencyMessage || "Not Available"}</td>
                  <td>
                    {report.timeReported
                      ? new Date(report.timeReported).toLocaleString()
                      : "Not Available"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No emergency reports available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmergencyReports;
