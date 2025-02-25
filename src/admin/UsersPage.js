import React from "react";
import "./UsersContent.css";

const UsersPage = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Manage Users</h2>
      <p className="page-description">Here, you can view, edit, or delete users.</p>
      <div className="actions">
        <button className="btn add-user">Add User</button>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>Admin</td>
            <td>
              <button className="btn edit">Edit</button>
              <button className="btn delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>User</td>
            <td>
              <button className="btn edit">Edit</button>
              <button className="btn delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;