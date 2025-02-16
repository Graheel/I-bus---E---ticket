// EmergencyReports.js
import React, { useState, useEffect } from "react";
import "./styles/EmergencyReports.css";

const EmergencyReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch emergency reports from backend or use dummy data
    const dummyReports = [
      {
        id: 1,
        driver: "John Doe",
        busNumber: "BUS-001",
        issue: "Engine malfunction",
        timeReported: "10:00 AM",
      },
      // Add more reports as needed
    ];
    setReports(dummyReports);
  }, []);

  return (
    <div className="emergency-reports">
      <h2>Emergency Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Bus Number</th>
            <th>Issue</th>
            <th>Time Reported</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.driver}</td>
              <td>{report.busNumber}</td>
              <td>{report.issue}</td>
              <td>{report.timeReported}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmergencyReports;
