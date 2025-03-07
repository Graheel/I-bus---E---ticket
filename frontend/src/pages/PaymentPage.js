import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react'; 
import './PaymentPage.css';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import PropTypes from 'prop-types';
import axios from 'axios';

const PaymentPage = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const ticketDetails = location.state?.ticketDetails; 
  const [pdfUrl, setPdfUrl] = useState('');

  console.log('Ticket Details:', ticketDetails);

  useEffect(() => {
    if (setShowNavbar) setShowNavbar(false);
    return () => setShowNavbar && setShowNavbar(true);
  }, [setShowNavbar]);

  const generatePDF = useCallback(async () => {
    if (!ticketDetails) return;

    const { username, source, destination, date, price } = ticketDetails;

    const doc = new jsPDF();
    doc.text(`Ticket Details`, 20, 20);
    doc.text(`Username: ${username}`, 20, 30);
    doc.text(`Source: ${source}`, 20, 40);
    doc.text(`Destination: ${destination}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);
    doc.text(`Total Price: ₹${price}`, 20, 70);

    try {
      const qrCodeData = `${username}_${source}_${destination}_${date}_${price}`;
      const qrCodeDataUrl = await QRCode.toDataURL(qrCodeData);

      doc.addImage(qrCodeDataUrl, 'PNG', 20, 80, 50, 50);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }

    const pdfOutput = doc.output('blob');
    const url = URL.createObjectURL(pdfOutput);
    setPdfUrl(url);
  }, [ticketDetails]);

  useEffect(() => {
    if (!ticketDetails) {
      alert('No ticket details found! Redirecting to home...');
      navigate('/');
    } else {
      generatePDF();
    }
  }, [ticketDetails, navigate, generatePDF]);

  const handlePayment = async (paymentData) => {
    if (!ticketDetails?.price) {
      alert('Invalid ticket details. Please try again.');
      return;
    }

    try {
      const response = await axios.post('https://i-bus-e-ticket-1.onrender.com/api/payment/create-payment-intent', {
        amount: ticketDetails.price,
      });

      if (response.status === 200) {
        alert('Payment successful!');
        if (pdfUrl) window.open(pdfUrl, '_blank');
        navigate('/');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('There was an error processing your payment. Please try again.');
    }
  };

  if (!ticketDetails) return null;

  return (
    <div className="payment-page">
      <h1>Payment Portal</h1>
      <h3>Total Amount: ₹{ticketDetails.price}</h3>
      
      <GooglePayButton
 environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    
    ],
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: ticketDetails.price.toString(),
      currencyCode: 'INR',
    },
    merchantInfo: {
      merchantName: 'Example Merchant',
    },
  }}
  onLoadPaymentData={handlePayment}
      />

      <div className="ticket-info">
        <h3>Your Ticket</h3>
        <p><strong>Username:</strong> {ticketDetails.username}</p>
        <p><strong>Source:</strong> {ticketDetails.source}</p>
        <p><strong>Destination:</strong> {ticketDetails.destination}</p>
        <p><strong>Date:</strong> {ticketDetails.date}</p>
        <p><strong>Total Price:</strong> ₹{ticketDetails.price}</p>
      </div>
    </div>
  );
};

PaymentPage.propTypes = {
  setShowNavbar: PropTypes.func.isRequired,
};

export default PaymentPage;
