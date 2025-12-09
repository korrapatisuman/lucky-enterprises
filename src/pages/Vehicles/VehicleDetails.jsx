import { useParams, Link } from "react-router-dom";
import "./vehicles.css";

function VehicleDetails() {
  const { id } = useParams();

  const vehicles = {
    1: { name: "Honda City", price: "₹ 11,50,000", description: "Premium sedan with comfort & mileage.", image: "/car1.jpg" },
    2: { name: "Mahindra Thar", price: "₹ 15,00,000", description: "Off-road beast with strong build.", image: "/car2.jpg" },
    3: { name: "Kia Seltos", price: "₹ 18,00,000", description: "Feature-rich and stylish SUV.", image: "/car3.jpg" },
  };

  const v = vehicles[id];

  return (
    <div className="veh-details">
      <img src={v.image} alt={v.name} />

      <h2>{v.name}</h2>
      <p className="price">{v.price}</p>
      <p>{v.description}</p>

      <Link to="/vehicles/bookings" className="btn">
        Book / Enquiry
      </Link>

      <Link to="/vehicles/buy" className="btn2">
        Back to Vehicles
      </Link>
    </div>
  );
}

export default VehicleDetails;
