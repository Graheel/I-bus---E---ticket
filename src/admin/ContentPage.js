import React from "react";
import "./UsersContent.css";

const ContentPage = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Manage Content</h2>
      <p className="page-description">Here, you can add, edit, or delete website content.</p>
      <div className="actions">
        <button className="btn add-content">Add Content</button>
      </div>
      <div className="content-list">
        <div className="content-item">
          <h3>Blog Post 1</h3>
          <p>Description: Lorem ipsum dolor sit amet.</p>
          <div className="item-actions">
            <button className="btn edit">Edit</button>
            <button className="btn delete">Delete</button>
          </div>
        </div>
        <div className="content-item">
          <h3>Blog Post 2</h3>
          <p>Description: Consectetur adipiscing elit.</p>
          <div className="item-actions">
            <button className="btn edit">Edit</button>
            <button className="btn delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;