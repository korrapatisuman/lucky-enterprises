import React from "react";
import "../AdminStyles.css"; // Global admin styling

function RevenueReport() {
  const revenue = [
    { label: "Vehicle Bookings", amount: "₹7,50,000" },
    { label: "Real Estate", amount: "₹3,20,000" },
    { label: "Consultancy", amount: "₹1,70,000" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Revenue Report</h2>
      </div>

      <div className="admin-card">
        <p style={{ fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}>
          Total Revenue (2025): <span style={{ color: "#2e7d32" }}>₹12,40,000</span>
        </p>

        <ul className="revenue-list">
          {revenue.map((item, idx) => (
            <li key={idx} className="revenue-item">
              <span>{item.label}</span>
              <strong>{item.amount}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RevenueReport;
