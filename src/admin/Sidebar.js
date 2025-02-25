import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin-dashboard" end>
              <i className="icon-dashboard"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/users">
              <i className="icon-users"></i> Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/content">
              <i className="icon-content"></i> Manage Content
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
