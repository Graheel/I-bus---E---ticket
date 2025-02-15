import React from "react";
import "./styles/ContentPage.css";

const ContentPage = () => {
  return (
    <div className="content-page">
      <h2>Manage Content</h2>
      <div className="content-list">
        <div className="content-item">
          <h3>Blog Post 1</h3>
          <p>Description: Lorem ipsum dolor sit amet.</p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
        <div className="content-item">
          <h3>Blog Post 2</h3>
          <p>Description: Consectetur adipiscing elit.</p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
