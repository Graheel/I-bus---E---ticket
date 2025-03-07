import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import BusManagement from "./BusManagement";
import DriverManagement from "./DriverManagement";
import EmergencyReports from "./EmergencyReports";
import FeedbackResponse from "./FeedbackResponse";
import TotalBookedTickets from "./TotalBookedTickets";
import RevenueOverview from "./RevenueOverview";
import BusRoundsTracking from "./BusRoundsTracking";
import "./styles/AdminDashboard.css";

const AdminDashboard = ({ setShowNavbar }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  const handleExit = () => {
    navigate("/login-register");
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-content">
        <button className="exit-btn" onClick={handleExit}>
          Exit to Main Website
        </button>

        <nav className="admin-nav">
          <Link to="/admin-dashboard/bus-management">Bus Management</Link>
          <Link to="/admin-dashboard/driver-management">Driver Management</Link>
          <Link to="/admin-dashboard/bus-rounds">Bus Status</Link>
          <Link to="/admin-dashboard/emergency-reports">Emergency Reports</Link>
          <Link to="/admin-dashboard/feedback-response">Feedback Response</Link>
          <Link to="/admin-dashboard/booked-tickets">Total Booked Tickets</Link>
          <Link to="/admin-dashboard/revenue">Revenue Overview</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BusManagement />} />
          <Route path="bus-management" element={<BusManagement />} />
          <Route path="driver-management" element={<DriverManagement />} />
          <Route path="emergency-reports" element={<EmergencyReports />} />
          <Route path="feedback-response" element={<FeedbackResponse />} />
          <Route path="booked-tickets" element={<TotalBookedTickets />} />
          <Route path="revenue" element={<RevenueOverview />} />
          <Route path="bus-rounds" element={<BusRoundsTracking />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
