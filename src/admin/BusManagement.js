import React, { useState } from "react";
import "./styles/BusManagement.css";

const BusManagement = () => {
  const [buses, setBuses] = useState([]);
  const [newBus, setNewBus] = useState({ number: "", route: "", driver: "", conductor: "" });

  const handleInputChange = (e) => {
    setNewBus({ ...newBus, [e.target.name]: e.target.value });
  };

  const addBus = () => {
    setBuses([...buses, { ...newBus, id: buses.length + 1 }]);
    setNewBus({ number: "", route: "", driver: "", conductor: "" });
  };

  return (
    <div className="bus-management">
      <h2>Manage Buses & Routes</h2>
      <div className="bus-form">
        <input type="text" name="number" placeholder="Bus Number" value={newBus.number} onChange={handleInputChange} />
        <input type="text" name="route" placeholder="Route" value={newBus.route} onChange={handleInputChange} />
        <input type="text" name="driver" placeholder="Driver Name" value={newBus.driver} onChange={handleInputChange} />
        <input type="text" name="conductor" placeholder="Conductor Name" value={newBus.conductor} onChange={handleInputChange} />
        <button onClick={addBus}>Add Bus</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Bus No</th>
            <th>Route</th>
            <th>Driver</th>
            <th>Conductor</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.number}</td>
              <td>{bus.route}</td>
              <td>{bus.driver}</td>
              <td>{bus.conductor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusManagement;
