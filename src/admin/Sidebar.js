import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/admin-dashboard" end>Dashboard</NavLink></li>
          <li><NavLink to="/admin-dashboard/users">Manage Users</NavLink></li>
          <li><NavLink to="/admin-dashboard/content">Manage Content</NavLink></li>
          <li><NavLink to="/admin-dashboard/bus-management">Bus Management</NavLink></li>
          <li><NavLink to="/admin-dashboard/emergency-reports">Emergency Reports</NavLink></li>
          <li><NavLink to="/admin-dashboard/revenue">Revenue Overview</NavLink></li>
          <li><NavLink to="/admin-dashboard/bus-rounds">Bus Rounds</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
