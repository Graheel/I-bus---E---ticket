// DriverItem.js
import React, { useState } from "react";
import "./styles/DriverItem.css";

const DriverItem = ({ driver, updateDriver, deleteDriver }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [driverData, setDriverData] = useState(driver);

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateDriver(driverData);
    setIsEditing(false);
  };

  return (
    <div className="driver-item">
      {isEditing ? (
        <>
          <input type="text" name="name" value={driverData.name} onChange={handleChange} />
          <input
            type="text"
            name="busAssigned"
            value={driverData.busAssigned}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            value={driverData.contact}
            onChange={handleChange}
          />
          <input type="text" name="status" value={driverData.status} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {driver.name}
          </p>
          <p>
            <strong>Bus Assigned:</strong> {driver.busAssigned}
          </p>
          <p>
            <strong>Contact:</strong> {driver.contact}
          </p>
          <p>
            <strong>Status:</strong> {driver.status}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteDriver(driver.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default DriverItem;
