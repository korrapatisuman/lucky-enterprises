import React from "react";
import "../AdminStyles.css"; // Use global admin styling

function VehiclesReport() {
  const data = [
    { vehicle: "Innova", bookings: 128, revenue: "₹3,20,000" },
    { vehicle: "Swift", bookings: 93, revenue: "₹1,40,000" },
    { vehicle: "Traveller", bookings: 44, revenue: "₹2,90,000" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Vehicles Report</h2>
      </div>

      <div className="admin-card">
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Total Bookings</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.vehicle}</td>
                <td>{row.bookings}</td>
                <td>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehiclesReport;
