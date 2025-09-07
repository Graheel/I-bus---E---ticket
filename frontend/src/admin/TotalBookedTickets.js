import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./styles/TotalBookedTickets.css";

const TotalBookedTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchTickets = useCallback(async () => {
    try {
      const response = await axios.get("https://i-bus-e-ticket-1.onrender.com/api/tickets/all");
      if (response.data) {
        setTickets(response.data);
        calculateTotalPrice(response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching tickets:",
        error.response ? error.response.data : error.message
      );
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const calculateTotalPrice = (tickets) => {
    const total = tickets.reduce((sum, ticket) => sum + (ticket.price || 0), 0);
    setTotalPrice(total);
  };

  return (
    <div className="total-booked-tickets">
      <h2>Total Booked Tickets</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Phone</th>
              <th>Route</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Booking Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.username || "Not Available"}</td>
                  <td>{ticket.phone || "Not Available"}</td>
                  <td>{ticket.route || "Not Available"}</td>
                  <td>{ticket.source || "Not Available"}</td>
                  <td>{ticket.destination || "Not Available"}</td>
                  <td>
                    {ticket.date
                      ? new Date(ticket.date).toLocaleDateString()
                      : "Not Available"}
                  </td>
                  <td>
                    {ticket.bookingTime
                      ? new Date(ticket.bookingTime).toLocaleTimeString()
                      : "Not Available"}
                  </td>
                  <td>{ticket.price || "Not Available"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No tickets booked
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="7">Total Price</td>
              <td>₹{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TotalBookedTickets;
