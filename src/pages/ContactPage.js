import React, { useState } from 'react';
import axios from 'axios'; 
import './ContactPage.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = { name, email, message };

    try {
      const response = await axios.post('https://i-bus-e-ticket-2.onrender.com/api/contact/submit', contactData);
      if (response.status === 201) {
        alert(`Thank you, ${name}! Your message has been received.`);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting contact message:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
