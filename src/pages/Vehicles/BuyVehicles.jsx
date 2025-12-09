import { Link } from "react-router-dom";
import "./vehicles.css";

function BuyVehicles() {
  const vehicles = [
    { id: 1, name: "Honda City", price: "₹ 11,50,000", image: "/car1.jpg" },
    { id: 2, name: "Mahindra Thar", price: "₹ 15,00,000", image: "/car2.jpg" },
    { id: 3, name: "Kia Seltos", price: "₹ 18,00,000", image: "/car3.jpg" },
  ];

  return (
    <div className="buy-container">
      <h2>Buy Vehicles</h2>

      <div className="vehicle-list">
        {vehicles.map((v) => (
          <div className="vehicle-card" key={v.id}>
            <img src={v.image} alt={v.name} />

            <h3>{v.name}</h3>
            <p>{v.price}</p>

            <Link to={`/vehicles/details/${v.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyVehicles;
