// RouteList.js
import React from "react";
import RouteItem from "./RouteItem";
import "./styles/RouteList.css";

const RouteList = ({ routes, updateRoute, deleteRoute }) => {
  return (
    <div className="route-list">
      <h3>Route List</h3>
      {routes.map((route) => (
        <RouteItem
          key={route.id}
          route={route}
          updateRoute={updateRoute}
          deleteRoute={deleteRoute}
        />
      ))}
    </div>
  );
};

export default RouteList;
