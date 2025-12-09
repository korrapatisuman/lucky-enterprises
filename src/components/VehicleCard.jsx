import { Link } from "react-router-dom";
import "../styles/vehicles.css";

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt="vehicle" className="vehicle-img" />

      <h3>{vehicle.title}</h3>
      <p><strong>Type:</strong> {vehicle.type}</p>
      <p><strong>Rent per Day:</strong> ₹{vehicle.rent}</p>

      <div className="vehicle-actions">
        <Link to={`/vehicles/${vehicle.id}`} className="btn-secondary">View</Link>
        <Link to={`/vehicles/edit/${vehicle.id}`} className="btn-primary">Edit</Link>
      </div>
    </div>
  );
}

export default VehicleCard;
