import React from "react";
import "./styles/BusRoundsTracking.css";

const BusRoundsTracking = () => {
  const busRounds = [
    { busNumber: "23A", completedRounds: 5, startTime: "07:45 AM", status: "On Time" },
    { busNumber: "12B", completedRounds: 3, startTime: "08:15 AM", status: "Late" },
  ];

  return (
    <div className="bus-rounds-tracking">
      <h2>Bus Rounds & Driver Timings</h2>
      <table>
        <thead>
          <tr>
            <th>Bus No</th>
            <th>Rounds Completed</th>
            <th>Driver Start Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {busRounds.map((round, index) => (
            <tr key={index}>
              <td>{round.busNumber}</td>
              <td>{round.completedRounds}</td>
              <td>{round.startTime}</td>
              <td>{round.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusRoundsTracking;
