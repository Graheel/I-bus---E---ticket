// BusRoundsTracking.js
import React, { useState, useEffect } from "react";
import "./styles/BusRoundsTracking.css";

const BusRoundsTracking = () => {
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    // Fetch rounds data from backend or use dummy data
    const dummyRounds = [
      {
        id: 1,
        busNumber: "BUS-001",
        driver: "John Doe",
        roundsCompleted: 5,
        startTime: "08:00 AM",
        status: "On Time",
      },
      // Add more rounds as needed
    ];
    setRounds(dummyRounds);
  }, []);

  return (
    <div className="bus-rounds-tracking">
      <h2>Bus Rounds Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Driver</th>
            <th>Rounds Completed</th>
            <th>Start Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rounds.map((round) => (
            <tr key={round.id}>
              <td>{round.busNumber}</td>
              <td>{round.driver}</td>
              <td>{round.roundsCompleted}</td>
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
