import { Link } from "react-router-dom";
import "./vehicles.css";

function VehicleDashboard() {
  return (
    <div className="veh-dashboard">
      <h1>🚗 Vehicles</h1>
      <p>Select a service below</p>

      <div className="veh-cards">

        <Link to="/vehicles/buy" className="veh-card">
          <h3>Buy Vehicles</h3>
          <p>Browse available vehicles</p>
        </Link>

        <Link to="/vehicles/sell" className="veh-card">
          <h3>Sell Your Vehicle</h3>
          <p>Post your vehicle for sale</p>
        </Link>

        <Link to="/vehicles/bookings" className="veh-card">
          <h3>Bookings</h3>
          <p>Check your test drive & booking details</p>
        </Link>

      </div>
    </div>
  );
}

export default VehicleDashboard;
