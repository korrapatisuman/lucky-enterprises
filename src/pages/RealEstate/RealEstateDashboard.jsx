import React from "react";
import { Link } from "react-router-dom";
import "./realEstate.css";

const RealEstateDashboard = () => {
  return (
    <div className="re-container">
      <h1 className="re-title">Real Estate Services</h1>

      <div className="re-grid">
        <Link to="/real-estate/properties" className="re-card">
          <h3>🏠 Property Listings</h3>
          <p>Buy / Sell houses, land & commercial buildings</p>
        </Link>

        <Link to="/real-estate/add-property" className="re-card">
          <h3>➕ Add New Property</h3>
          <p>Post a house/land for sale or rent</p>
        </Link>

        <Link to="/real-estate/loans" className="re-card">
          <h3>💰 Loans & Home Finance</h3>
          <p>Apply for house loans, land loans & EMI plans</p>
        </Link>
      </div>
    </div>
  );
};

export default RealEstateDashboard;
