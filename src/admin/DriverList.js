// DriverList.js
import React from "react";
import DriverItem from "./DriverItem";
import "./styles/DriverList.css";

const DriverList = ({ drivers, updateDriver, deleteDriver }) => {
  return (
    <div className="driver-list">
      <h3>Driver List</h3>
      {drivers.map((driver) => (
        <DriverItem
          key={driver.id}
          driver={driver}
          updateDriver={updateDriver}
          deleteDriver={deleteDriver}
        />
      ))}
    </div>
  );
};

export default DriverList;
