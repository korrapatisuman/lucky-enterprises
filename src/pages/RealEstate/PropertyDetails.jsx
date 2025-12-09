import React from "react";
import { useParams } from "react-router-dom";
import "./realEstate.css";

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <div className="re-container">
      <h1>Property Details #{id}</h1>

      <div className="property-details-box">
        <p><strong>Title:</strong> 3BHK Flat</p>
        <p><strong>Price:</strong> 45 Lakhs</p>
        <p><strong>Location:</strong> Hyderabad</p>
        <p><strong>Description:</strong> Spacious modern flat...</p>

        <button className="btn-primary">Buy / Contact Owner</button>
      </div>
    </div>
  );
};

export default PropertyDetails;
