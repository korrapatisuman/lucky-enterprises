import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/vehicles.css";

function AddVehicle() {
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    title: "",
    type: "",
    rent: "",
    image: "",
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vehicle.title || !vehicle.type || !vehicle.rent) {
      alert("All fields required");
      return;
    }

    console.log("Vehicle Added:", vehicle);
    alert("Vehicle Added Successfully");

    navigate("/vehicles");
  };

  return (
    <div className="vehicle-form-container">
      <h2>Add New Vehicle</h2>

      <form onSubmit={handleSubmit} className="vehicle-form">
        <label>Title</label>
        <input type="text" name="title" value={vehicle.title} onChange={handleChange} />

        <label>Type</label>
        <input type="text" name="type" value={vehicle.type} onChange={handleChange} />

        <label>Rent Per Day (₹)</label>
        <input type="number" name="rent" value={vehicle.rent} onChange={handleChange} />

        <label>Image URL</label>
        <input type="text" name="image" value={vehicle.image} onChange={handleChange} />

        <button type="submit" className="btn-primary">Add Vehicle</button>
      </form>
    </div>
  );
}

export default AddVehicle;
