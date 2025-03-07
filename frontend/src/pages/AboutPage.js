import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to iBus E-Ticket</h1>
        <p>Your gateway to seamless and eco-friendly travel in Indore!</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          At iBus E-Ticket, we are committed to revolutionizing public transport by making it efficient, accessible, and environment-friendly. 
          With our platform, you can plan your journey, book tickets, and enjoy stress-free travel across Indore.
        </p>
      </section>

      <section className="about-section">
        <h2>The iBus Experience</h2>
        <p>
          Indore's iBus system is designed to provide a safe, timely, and comfortable journey. 
          Running across major routes such as Niranjanpur to Mhow Railway Station, iBus has become an essential part of the city's daily commute.
        </p>
        <div className="ibus-image">
          <img 
            src="https://valoriserconsultants.com/wp-content/uploads/2017/03/indore-bus-1.jpg" 
            alt="Indore iBus"
          />
        </div>
      </section>

      <section className="about-section">
        <h2>Our Routes</h2>
        <p>Below are some of the key stops on the Niranjanpur to Mhow Railway Station route:</p>
        <ul className="routes-list">
          <li>Niranjanpur</li>
          <li>Scheme 78</li>
          <li>Shalini Township</li>
          <li>Satya Sai Square</li>
          <li>Vijay Nagar</li>
          <li>Press Complex</li>
          <li>LIG</li>
          <li>Rajiv Gandhi Square</li>
          <li>Silicon City</li>
          <li>Rau Bypass</li>
          <li>Mhow Railway Station</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose iBus?</h2>
        <div className="features">
          <div className="feature">
            <h3>Eco-Friendly Travel</h3>
            <p>With CNG and electric buses, iBus is helping reduce pollution in the city.</p>
          </div>
          <div className="feature">
            <h3>Affordable</h3>
            <p>Travel across the city at pocket-friendly prices, with no hidden charges.</p>
          </div>
          <div className="feature">
            <h3>Timely Service</h3>
            <p>With a well-maintained schedule, you can trust iBus to get you to your destination on time.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-image-section">
        <h2>Join Us in Making Travel Smarter</h2>
        <p>Explore the convenience of public transportation with iBus E-Ticket and be part of a sustainable future.</p>
        <img 
          src="https://img.freepik.com/premium-photo/smart-public-transit-infrastructure-ai-public-transportation-where-artificial-intelligence_1165841-21257.jpg?w=1380" 
          alt="Smart City Transport"
        />
      </section>

      
    </div>
  );
};

export default AboutPage;
