import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/BusList.css";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [editingBus, setEditingBus] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  // Fetch all buses from backend
  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bus/all"); 
      setBuses(response.data);
    } catch (error) {
      console.error("Error fetching buses:", error);
    }
  };

  // Handle delete bus
  const deleteBus = async (id) => {
    if (window.confirm("Are you sure you want to delete this bus?")) {
      try {
        await axios.delete(`http://localhost:5000/api/bus/delete/${id}`);
        setBuses(buses.filter((bus) => bus._id !== id)); 
        alert("Bus deleted successfully ✅");
      } catch (error) {
        console.error("Error deleting bus:", error);
      }
    }
  };

  // Handle edit button click
  const startEditing = (bus) => {
    setEditingBus(bus._id);
    setUpdatedData({
      uniqueNumber: bus.uniqueNumber,
      nameplateNumber: bus.nameplateNumber,
      route: bus.route,
      driver: bus.driver,
    });
  };

  // Handle input change during editing
  const handleEditChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  // Save edited bus
  const saveBus = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/bus/update/${id}`, updatedData);
      setBuses(buses.map((bus) => (bus._id === id ? response.data.bus : bus))); 
      setEditingBus(null);
      alert("Bus updated successfully ✅");
    } catch (error) {
      console.error("Error updating bus:", error);
    }
  };

  return (
    <div className="bus-list">
      <h3>Bus List</h3>
      <table>
        <thead>
          <tr>
            <th>Unique Number</th>
            <th>Nameplate Number</th>
            <th>Route</th>
            <th>Driver</th>
            <th>Timings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus._id}>
              {editingBus === bus._id ? (
                <>
                  <td><input type="text" name="uniqueNumber" value={updatedData.uniqueNumber} onChange={handleEditChange} /></td>
                  <td><input type="text" name="nameplateNumber" value={updatedData.nameplateNumber} onChange={handleEditChange} /></td>
                  <td>
                    <select name="route" value={updatedData.route} onChange={handleEditChange}>
                      {Array.from({ length: 12 }, (_, i) => `ROUTE-${String.fromCharCode(65 + i)}`).map((route) => (
                        <option key={route} value={route}>{route}</option>
                      ))}
                    </select>
                  </td>
                  <td><input type="text" name="driver" value={updatedData.driver} onChange={handleEditChange} /></td>
                  <td>08:00 AM - 09:00 PM</td>
                  <td>
                    <button onClick={() => saveBus(bus._id)}>Save</button>
                    <button onClick={() => setEditingBus(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{bus.uniqueNumber}</td>
                  <td>{bus.nameplateNumber}</td>
                  <td>{bus.route}</td>
                  <td>{bus.driver}</td>
                  <td>{bus.timings}</td>
                  <td>
                    <button onClick={() => startEditing(bus)}>Edit</button>
                    <button onClick={() => deleteBus(bus._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusList;
