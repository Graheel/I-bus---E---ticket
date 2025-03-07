import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./styles/RevenueOverview.css"; 

const TotalRevenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  const fetchTotalRevenue = useCallback(async () => {
    try {
      const response = await axios.get("https://i-bus-e-ticket-2.onrender.com/api/tickets/all");
      const total = response.data.reduce((sum, ticket) => sum + ticket.price, 0);
      setTotalRevenue(total);
    } catch (error) {
      console.error("Error fetching total revenue:", error.response ? error.response.data : error.message);
    }
  }, []);

  useEffect(() => {
    fetchTotalRevenue();
  }, [fetchTotalRevenue]);

  return (
    <div className="total-revenue">
      <h2>Total Revenue</h2>
      <p>Total Revenue from Booked Tickets: <strong>₹{totalRevenue}</strong></p>
    </div>
  );
};

export default TotalRevenue;
