// BusItem.js
import React, { useState } from "react";
import "./styles/BusItem.css";

const BusItem = ({ bus, updateBus, deleteBus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [busData, setBusData] = useState(bus);

  const handleChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateBus(busData);
    setIsEditing(false);
  };

  return (
    <div className="bus-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="uniqueNumber"
            value={busData.uniqueNumber}
            onChange={handleChange}
          />
          <input type="text" name="route" value={busData.route} onChange={handleChange} />
          <input type="text" name="driver" value={busData.driver} onChange={handleChange} />
          <input
            type="text"
            name="conductor"
            value={busData.conductor}
            onChange={handleChange}
          />
          <input type="text" name="timings" value={busData.timings} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>
            <strong>Unique Number:</strong> {bus.uniqueNumber}
          </p>
          <p>
            <strong>Route:</strong> {bus.route}
          </p>
          <p>
            <strong>Driver:</strong> {bus.driver}
          </p>
          <p>
            <strong>Conductor:</strong> {bus.conductor}
          </p>
          <p>
            <strong>Timings:</strong> {bus.timings}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteBus(bus.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BusItem;
