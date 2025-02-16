// RouteForm.js
import React, { useState } from "react";
import "./styles/RouteForm.css";

const RouteForm = ({ addRoute }) => {
  const [routeData, setRouteData] = useState({
    routeName: "",
    timings: "",
  });

  const handleChange = (e) => {
    setRouteData({ ...routeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoute(routeData);
    setRouteData({
      routeName: "",
      timings: "",
    });
  };

  return (
    <form className="route-form" onSubmit={handleSubmit}>
      <h3>Add New Route</h3>
      <input
        type="text"
        name="routeName"
        placeholder="Route Name"
        value={routeData.routeName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="timings"
        placeholder="Timings"
        value={routeData.timings}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Route</button>
    </form>
  );
};

export default RouteForm;
