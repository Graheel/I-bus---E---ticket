import React, { useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthContainer from "./components/AuthContainer";
import BookTicket from "./pages/BookTicket";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PaymentPage from "./pages/PaymentPage";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./admin/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import DriverLoginForm from "./components/DriverLoginForm";
import AdminLoginForm from "./components/AdminLoginForm";

import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const noNavFooterRoutes = ["/login-register", "/driver-login", "/admin-login"];

  return (
    <div className="App">
      {showNavbar && !noNavFooterRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* ✅ Redirect root path ("/") to login-register */}
        <Route path="/" element={<Navigate to="/login-register" />} />
        <Route path="/home" element={<HomePage />} /> {/* Set HomePage separately */}
        <Route path="/book-ticket" element={<BookTicket />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login-register" element={<AuthContainer />} />
        <Route path="/admin-login" element={<AdminLoginForm />} />
        <Route path="/driver-login" element={<DriverLoginForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard setShowNavbar={setShowNavbar} />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
      </Routes>
      {showNavbar && !noNavFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
