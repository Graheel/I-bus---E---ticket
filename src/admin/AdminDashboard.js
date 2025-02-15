import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import Sidebar from "./Sidebar";
import DashboardOverview from "./DashboardOverview";
import UsersPage from "./UsersPage";
import ContentPage from "./ContentPage";
import BusManagement from "./BusManagement";
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
      <Sidebar />
      <div className="dashboard-content">
        <button className="exit-btn" onClick={handleExit}>Exit to Main Website</button>

        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="bus-management" element={<BusManagement />} />
          <Route path="emergency-reports" element={<EmergencyReports />} />
          <Route path="revenue" element={<RevenueOverview />} />
          <Route path="bus-rounds" element={<BusRoundsTracking />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
