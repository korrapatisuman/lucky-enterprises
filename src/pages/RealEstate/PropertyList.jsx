import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./realEstate.css";

const dummyProperties = [
  { id: 1, title: "3BHK Flat", price: "45 Lakhs", location: "Hyderabad" },
  { id: 2, title: "Open Plot 200 Sq.Yards", price: "22 Lakhs", location: "Warangal" },
];

const PropertyList = () => {
  const [properties] = useState(dummyProperties);

  return (
    <div className="re-container">
      <h1 className="re-title">Available Properties</h1>

      <Link to="/real-estate/add-property" className="btn-primary">Add Property</Link>

      <div className="property-list">
        {properties.map((p) => (
          <div key={p.id} className="property-card">
            <h3>{p.title}</h3>
            <p><strong>Price:</strong> {p.price}</p>
            <p><strong>Location:</strong> {p.location}</p>

            <div className="actions">
              <Link to={`/real-estate/property/${p.id}`} className="btn-view">View</Link>
              <Link to={`/real-estate/edit-property/${p.id}`} className="btn-edit">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
