import React, { useState, useEffect, useCallback } from "react";
import axios from "axios"; 
import "./styles/TotalBookedTickets.css"; 

const TotalBookedTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchTickets = useCallback(async () => {
    try {
      const response = await axios.get("https://i-bus-e-ticket-2.onrender.com/api/tickets/all");
      setTickets(response.data);
      calculateTotalPrice(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error.response ? error.response.data : error.message);
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const calculateTotalPrice = (tickets) => {
    const total = tickets.reduce((sum, ticket) => sum + ticket.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="total-booked-tickets">
      <h2>Total Booked Tickets</h2>
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
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.username}</td>
              <td>{ticket.phone}</td>
              <td>{ticket.route}</td>
              <td>{ticket.source}</td>
              <td>{ticket.destination}</td>
              <td>{new Date(ticket.date).toLocaleDateString()}</td>
              <td>{new Date(ticket.bookingTime).toLocaleTimeString()}</td> {/* Shows only time */}
              <td>{ticket.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7">Total Price</td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TotalBookedTickets;
