
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import './PaymentPage.css';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import PropTypes from 'prop-types';

const PaymentPage = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const ticketDetails = location.state?.ticketDetails;

  const [loading, setLoading] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (setShowNavbar) setShowNavbar(false);

    return () => {
      if (setShowNavbar) setShowNavbar(true);
    };
  }, [setShowNavbar]);

  useEffect(() => {
    if (!ticketDetails) {
      alert('No ticket details found!');
      navigate('/');
    }
  }, [ticketDetails, navigate]);

  const generateTicket = async () => {
    if (loading || paymentDone) return;

    const amount = Number(ticketDetails?.price);

    if (!Number.isFinite(amount) || amount <= 0) {
      alert('Invalid ticket amount.');
      return;
    }

    setLoading(true);

    try {
      const newTicketId = 'IBUS-' + Date.now().toString().slice(-8);

      const ticketData = {
        ticketId: newTicketId,
        username: ticketDetails.username,
        source: ticketDetails.source,
        destination: ticketDetails.destination,
        date: ticketDetails.date,
        price: amount,
        paymentStatus: 'DEMO SUCCESS'
      };

      const qrCode = await QRCode.toDataURL(
        JSON.stringify(ticketData)
      );

      const doc = new jsPDF();

      doc.setFontSize(22);
      doc.text('iBus E-Ticket', 20, 20);

      doc.setFontSize(11);
      doc.text('DEMO TICKET - NOT VALID FOR REAL TRAVEL', 20, 30);

      doc.line(20, 35, 190, 35);

      doc.setFontSize(13);
      doc.text(`Ticket ID: ${newTicketId}`, 20, 48);
      doc.text(`Username: ${ticketDetails.username}`, 20, 60);
      doc.text(`Source: ${ticketDetails.source}`, 20, 72);
      doc.text(`Destination: ${ticketDetails.destination}`, 20, 84);
      doc.text(`Date: ${ticketDetails.date}`, 20, 96);
      doc.text(`Total Price: INR ${amount.toFixed(2)}`, 20, 108);
      doc.text('Payment Status: DEMO SUCCESS', 20, 122);

      doc.addImage(qrCode, 'PNG', 20, 135, 55, 55);

      doc.save(`${newTicketId}.pdf`);

      setTicketId(newTicketId);
      setPaymentDone(true);

    } catch (error) {
      console.error('Ticket generation error:', error);
      alert('Ticket generation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (paymentData) => {
    console.log('Google Pay test payment response:', paymentData);

    // Demo only: simulate success after Google Pay returns
    await generateTicket();
  };

  if (!ticketDetails) return null;

  return (
    <div className="payment-page">

      <h1>Payment Portal</h1>

      <h3>Total Amount: ₹{ticketDetails.price}</h3>

      <div className="ticket-info">
        <h3>Journey Details</h3>

        <p><strong>Username:</strong> {ticketDetails.username}</p>
        <p><strong>Source:</strong> {ticketDetails.source}</p>
        <p><strong>Destination:</strong> {ticketDetails.destination}</p>
        <p><strong>Date:</strong> {ticketDetails.date}</p>
        <p><strong>Total Price:</strong> ₹{ticketDetails.price}</p>
      </div>

      {!paymentDone ? (
        <div className="google-pay-section">

          <h3>Pay Using Google Pay</h3>

          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: [
                      'PAN_ONLY',
                      'CRYPTOGRAM_3DS'
                    ],
                    allowedCardNetworks: [
                      'MASTERCARD',
                      'VISA'
                    ]
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId'
                    }
                  }
                }
              ],
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPrice: Number(ticketDetails.price).toFixed(2),
                currencyCode: 'INR'
              },
              merchantInfo: {
                merchantName: 'iBus E-Ticket'
              }
            }}
            onLoadPaymentData={handlePayment}
          />

          {loading && <p>Generating your ticket...</p>}

        </div>
      ) : (
        <div className="payment-success">
          <h2>Demo Payment Successful!</h2>
          <p>Your ticket PDF has been downloaded.</p>
          <p><strong>Ticket ID:</strong> {ticketId}</p>

          <button onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      )}

    </div>
  );
};

PaymentPage.propTypes = {
  setShowNavbar: PropTypes.func
};

export default PaymentPage;
