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
          <input type="text" name="uniqueNumber" value={busData.uniqueNumber} onChange={handleChange} />
          <input type="text" name="nameplateNumber" value={busData.nameplateNumber} onChange={handleChange} />
          <input type="text" name="route" value={busData.route} onChange={handleChange} />
          <input type="text" name="driver" value={busData.driver} onChange={handleChange} />
          <input type="text" name="timings" value="08:00 AM - 09:00 PM" readOnly />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>
            <strong>Unique Number:</strong> {bus.uniqueNumber}
          </p>
          <p>
            <strong>Nameplate Number:</strong> {bus.nameplateNumber}
          </p>
          <p>
            <strong>Route:</strong> {bus.route}
          </p>
          <p>
            <strong>Driver:</strong> {bus.driver}
          </p>
          <p>
            <strong>Timings:</strong> 08:00 AM - 09:00 PM
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteBus(bus.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BusItem;
