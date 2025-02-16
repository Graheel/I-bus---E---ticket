// RouteManagement.js
import React, { useState, useEffect } from "react";
import RouteForm from "./RouteForm";
import RouteList from "./RouteList";
import "./styles/RouteManagement.css";

const RouteManagement = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Fetch routes from backend or use dummy data
    const dummyRoutes = [
      {
        id: 1,
        routeName: "Route A",
        timings: "08:00 AM - 05:00 PM",
      },
      // Add more routes as needed
    ];
    setRoutes(dummyRoutes);
  }, []);

  const addRoute = (route) => {
    setRoutes([...routes, { ...route, id: Date.now() }]);
  };

  const updateRoute = (updatedRoute) => {
    setRoutes(routes.map((route) => (route.id === updatedRoute.id ? updatedRoute : route)));
  };

  const deleteRoute = (id) => {
    setRoutes(routes.filter((route) => route.id !== id));
  };

  return (
    <div className="route-management">
      <h2>Route Management</h2>
      <RouteForm addRoute={addRoute} />
      <RouteList routes={routes} updateRoute={updateRoute} deleteRoute={deleteRoute} />
    </div>
  );
};

export default RouteManagement;
