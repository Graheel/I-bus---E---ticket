import React from "react";
import "./styles/DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="overview-card pink">
        <h3>Total Revenue</h3>
        <p>$15,000</p>
      </div>
      <div className="overview-card blue">
        <h3>Total Users</h3>
        <p>1,200</p>
      </div>
      <div className="overview-card green">
        <h3>Buses Running</h3>
        <p>45</p>
      </div>
    </div>
  );
};

export default DashboardOverview;
