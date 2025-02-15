import React from "react";
import "./styles/RevenueOverview.css";

const RevenueOverview = () => {
  const revenue = 12500;

  return (
    <div className="revenue-overview">
      <h2>Total Daily Revenue</h2>
      <p className="revenue-amount">${revenue}</p>
    </div>
  );
};

export default RevenueOverview;
