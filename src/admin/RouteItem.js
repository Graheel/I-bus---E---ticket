// RouteItem.js
import React, { useState } from "react";
import "./styles/RouteItem.css";

const RouteItem = ({ route, updateRoute, deleteRoute }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [routeData, setRouteData] = useState(route);

  const handleChange = (e) => {
    setRouteData({ ...routeData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateRoute(routeData);
    setIsEditing(false);
  };

  return (
    <div className="route-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="routeName"
            value={routeData.routeName}
            onChange={handleChange}
          />
          <input type="text" name="timings" value={routeData.timings} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>
            <strong>Route Name:</strong> {route.routeName}
          </p>
          <p>
            <strong>Timings:</strong> {route.timings}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteRoute(route.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RouteItem;
