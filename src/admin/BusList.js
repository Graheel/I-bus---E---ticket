// BusList.js
import React from "react";
import BusItem from "./BusItem";
import "./styles/BusList.css";

const BusList = ({ buses, updateBus, deleteBus }) => {
  return (
    <div className="bus-list">
      <h3>Bus List</h3>
      {buses.map((bus) => (
        <BusItem key={bus.id} bus={bus} updateBus={updateBus} deleteBus={deleteBus} />
      ))}
    </div>
  );
};

export default BusList;
