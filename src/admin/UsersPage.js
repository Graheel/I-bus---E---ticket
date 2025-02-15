import React from "react";
import "./styles/UsersPage.css";

const UsersPage = () => {
  return (
    <div className="users-page">
      <h2>Manage Users</h2>
      <table>
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
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
