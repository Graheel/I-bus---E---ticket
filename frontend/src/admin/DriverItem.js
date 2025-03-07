import React, { useState } from "react";
import "./styles/DriverItem.css";

const DriverItem = ({ driver, updateDriver, deleteDriver }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [driverData, setDriverData] = useState(driver);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("busDetails")) {
      const key = name.split(".")[1];
      setDriverData((prevState) => ({
        ...prevState,
        busDetails: { ...prevState.busDetails, [key]: value },
      }));
    } else {
      setDriverData({ ...driverData, [name]: value });
    }
  };

  const handleUpdate = () => {
    updateDriver(driverData);
    setIsEditing(false);
  };

  return (
    <div className="driver-item">
      {isEditing ? (
        <>
          <input type="text" name="name" value={driverData.name} onChange={handleChange} placeholder="Name" />
          <input type="email" name="email" value={driverData.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="licenseNumber" value={driverData.licenseNumber} onChange={handleChange} placeholder="License Number" />
          <input type="text" name="routeAssigned" value={driverData.routeAssigned} onChange={handleChange} placeholder="Route" />
          <input type="text" name="busDetails.busNumber" value={driverData.busDetails.busNumber} onChange={handleChange} placeholder="Bus Number" />
          <input type="text" name="busDetails.nameplateNumber" value={driverData.busDetails.nameplateNumber} onChange={handleChange} placeholder="Nameplate Number" />
          <input type="text" name="contact" value={driverData.contact} onChange={handleChange} placeholder="Contact" />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {driver.name}</p>
          <p><strong>Email:</strong> {driver.email}</p>
          <p><strong>License Number:</strong> {driver.licenseNumber}</p>
          <p><strong>Route Assigned:</strong> {driver.routeAssigned}</p>
          <p><strong>Bus Number:</strong> {driver.busDetails.busNumber}</p>
          <p><strong>Nameplate Number:</strong> {driver.busDetails.nameplateNumber}</p>
          <p><strong>Contact:</strong> {driver.contact}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteDriver(driver._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default DriverItem;
