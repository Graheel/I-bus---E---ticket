// RevenueOverview.js
import React, { useState, useEffect } from "react";
import "./styles/RevenueOverview.css";

const RevenueOverview = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch revenue data from backend or use dummy data
    const dummyRevenue = 5000; // Example amount
    setTotalRevenue(dummyRevenue);
  }, []);

  return (
    <div className="revenue-overview">
      <h2>Revenue Overview</h2>
      <p>
        <strong>Total Revenue Generated Today:</strong> ${totalRevenue}
      </p>
    </div>
  );
};

export default RevenueOverview;
