import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BookTicket from "./pages/BookTicket";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";
import AdminDashboard from "./admin/AdminDashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthContainer from "./components/AuthContainer"; 
import DriverDashboard from "./pages/DriverDashboard";
import DriverLoginForm from "./components/DriverLoginForm";

import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <Router>
      <div className="App">
        {showNavbar && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
          />
          <Route
            path="/book-ticket"
            element={
              <ErrorBoundary>
                <BookTicket setShowNavbar={setShowNavbar} />
              </ErrorBoundary>
            }
          />
          <Route
            path="/about"
            element={
              <ErrorBoundary>
                <AboutPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="/contact"
            element={
              <ErrorBoundary>
                <ContactPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="/login-register"
            element={
              <ErrorBoundary>
                <AuthContainer /> {/* Use AuthContainer instead of LoginRegisterPage */}
              </ErrorBoundary>
            }
          />
          <Route
            path="/payment"
            element={
              <ErrorBoundary>
                <PaymentPage setShowNavbar={setShowNavbar} />
              </ErrorBoundary>
            }
          />
          <Route
            path="/admin-dashboard/*"
            element={
              <ErrorBoundary>
                <AdminDashboard setShowNavbar={setShowNavbar} />
              </ErrorBoundary>
            }
          />
        
          <Route path="/driver-login" element={<DriverLoginForm />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
