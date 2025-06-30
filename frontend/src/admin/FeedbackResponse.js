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
      const response = await axios.get("http://localhost:5000/api/contact/messages");
      setResponses(response.data);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  return (
    <div className="feedback-responses">
      <h2>Contact Messages</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {responses.length > 0 ? (
              responses.map((response) => (
                <tr key={response._id}>
                  <td>{response.name || "Not Available"}</td>
                  <td>{response.email || "Not Available"}</td>
                  <td>{response.message || "Not Available"}</td>
                  <td>
                    {response.dateSubmitted
                      ? new Date(response.dateSubmitted).toLocaleDateString()
                      : "Not Available"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No messages available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackResponse;
