// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BookTicket from "./pages/BookTicket";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AuthContainer from "./components/AuthContainer";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";
import AdminDashboard from "./admin/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [authType, setAuthType] = useState("user");

  return (
    <Router>
      <div className="App">
        {showNavbar && window.location.pathname !== "/driver-dashboard" && <Navbar />}
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
                <AuthContainer authType={authType} setAuthType={setAuthType} />
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
          <Route
            path="/driver-dashboard"
            element={
              <ErrorBoundary>
                <DriverDashboard />
              </ErrorBoundary>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
