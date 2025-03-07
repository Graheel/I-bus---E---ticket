import React from "react";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="overview-card gradient-card pink">
        <h3>Weekly Sales</h3>
        <p>$15,000</p>
        <small>Increased by 60%</small>
      </div>
      <div className="overview-card gradient-card blue">
        <h3>Weekly Orders</h3>
        <p>45,633</p>
        <small>Decreased by 10%</small>
      </div>
      <div className="overview-card gradient-card green">
        <h3>Visitors Online</h3>
        <p>95,741</p>
        <small>Increased by 5%</small>
      </div>
    </div>
  );
};

export default DashboardOverview;
