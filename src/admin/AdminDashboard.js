// AdminDashboard.js
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import BusManagement from "./BusManagement";
import DriverManagement from "./DriverManagement";
import RouteManagement from "./RouteManagement";
import EmergencyReports from "./EmergencyReports";
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
      {/* Removed Sidebar */}
      <div className="dashboard-content">
        <button className="exit-btn" onClick={handleExit}>
          Exit to Main Website
        </button>

        {/* Added Navigation Menu */}
        <nav className="admin-nav">
          <Link to="/admin-dashboard/bus-management">Bus Management</Link>
          <Link to="/admin-dashboard/driver-management">Driver Management</Link>
          <Link to="/admin-dashboard/route-management">Route Management</Link>
          <Link to="/admin-dashboard/bus-rounds">Bus Rounds Tracking</Link>
          <Link to="/admin-dashboard/emergency-reports">Emergency Reports</Link>
          <Link to="/admin-dashboard/revenue">Revenue Overview</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BusManagement />} />
          <Route path="bus-management" element={<BusManagement />} />
          <Route path="driver-management" element={<DriverManagement />} />
          <Route path="route-management" element={<RouteManagement />} />
          <Route path="emergency-reports" element={<EmergencyReports />} />
          <Route path="revenue" element={<RevenueOverview />} />
          <Route path="bus-rounds" element={<BusRoundsTracking />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
