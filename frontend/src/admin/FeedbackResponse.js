import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./styles/FeedbackResponse.css"; 

const FeedbackResponse = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchContactMessages();
  }, []);

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get("https://i-bus-e-ticket-1.onrender.com/api/contact/messages");
      setResponses(response.data);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  return (
    <div className="feedback-responses">
      <h2>Contact Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date Submitted</th> {/* Updated header */}
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response._id}>
              <td>{response.name}</td>
              <td>{response.email}</td>
              <td>{response.message}</td>
              <td>{new Date(response.dateSubmitted).toLocaleDateString()}</td> {/* Updated field */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackResponse;
