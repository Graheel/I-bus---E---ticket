import React, { useState } from 'react';
import './HomePage.css';


import headerImage from './images/ibus image  2.jpg'; 
import modernBusImage from './images/ibus home page image.avif'; 
import easyBookingImage from './images/easy booking.webp'; 
import securePaymentImage from './images/secure payment.webp'; 
import galleryImage1 from './images/bus.jpg';
import galleryImage2 from './images/iterior.jpg';
import galleryImage3 from './images/seats.jpg';

const HomePage = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '' });

  const openLightbox = (src) => {
    setLightbox({ isOpen: true, src });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '' });
  };

  return (
    <div className="home">
      {/* Header Section */}
      <header className="home-header">
        <img
          src={headerImage}
          alt="Bus Travel"
          className="home-header-image"
        />
        <div className="header-overlay">
          <h1>Welcome to iBus E-Ticket</h1>
          <p>Plan your journey with ease and convenience. Book your tickets now!</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose iBus?</h2>
        <div className="feature-cards">
          <div className="card">
            <img
              src={modernBusImage}
              alt="Modern Buses"
              className="feature-image"
            />
            <h3>Comfortable Rides</h3>
            <p>Experience top-notch comfort in our modern buses.</p>
          </div>
          <div className="card">
            <img
              src={easyBookingImage}
              alt="Easy Booking"
              className="feature-image"
            />
            <h3>Easy Booking</h3>
            <p>Book tickets in just a few clicks with our user-friendly platform.</p>
          </div>
          <div className="card">
            <img
              src={securePaymentImage}
              alt="Secure Payments"
              className="feature-image"
            />
            <h3>Secure Payments</h3>
            <p>Your transactions are safe and secure with us.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          {/* Local images imported and used here */}
          <img
            src={galleryImage1}
            alt="Bus"
            className="gallery-image"
            onClick={() => openLightbox(galleryImage1)}
          />
          <img
            src={galleryImage2}
            alt="Interior"
            className="gallery-image"
            onClick={() => openLightbox(galleryImage2)}
          />
          <img
            src={galleryImage3}
            alt="Seats"
            className="gallery-image"
            onClick={() => openLightbox(galleryImage3)}
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightbox.src} alt="Lightbox" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default HomePage;
