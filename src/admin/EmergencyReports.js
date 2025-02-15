import React from "react";
import "./styles/EmergencyReports.css";

const EmergencyReports = () => {
  const reports = [
    { driver: "John Doe", busNumber: "23A", issue: "Brake Failure", time: "10:30 AM" },
  ];

  return (
    <div className="emergency-reports">
      <h2>Emergency Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Bus No</th>
            <th>Issue</th>
            <th>Reported At</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.driver}</td>
              <td>{report.busNumber}</td>
              <td>{report.issue}</td>
              <td>{report.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmergencyReports;
