import React from "react";
import DriverItem from "./DriverItem";
import "./styles/DriverList.css";

const DriverList = ({ drivers, updateDriver, deleteDriver }) => {
  return (
    <div className="driver-list">
      <h3>Driver List</h3>
      {drivers.length > 0 ? (
        drivers.map((driver) => (
          <DriverItem key={driver._id} driver={driver} updateDriver={updateDriver} deleteDriver={deleteDriver} />
        ))
      ) : (
        <p>No drivers available</p>
      )}
    </div>
  );
};

export default DriverList;
