import { Link } from "react-router-dom";

function VehicleList() {
  const vehicles = [
    { id: 1, name: "Swift Car", price: "1500/day" },
    { id: 2, name: "Innova", price: "2500/day" },
    { id: 3, name: "Scorpio", price: "3000/day" },
  ];

  return (
    <div >
      <h2>Available Vehicles</h2>
     <div className="cars">
      {vehicles.map((v) => (
        <div key={v.id} className="card">
          <h3>{v.name}</h3>
          <p>{v.price}</p>
          <Link to={`/vehicles/${v.id}`}>View Details</Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default VehicleList;
