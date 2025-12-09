import React from "react";
import "../AdminStyles.css"; // ← Use the single global admin CSS

function RealEstateReport() {
  const data = [
    { property: "Plot - Hyderabad", type: "Sale", deals: 6, revenue: "₹1,20,000" },
    { property: "Flat - Guntur", type: "Sale", deals: 3, revenue: "₹95,000" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Real Estate Report</h2>
      </div>

      <div className="admin-card">
        <table className="table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Deals Closed</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.property}</td>
                <td>{row.type}</td>
                <td>{row.deals}</td>
                <td>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RealEstateReport;
