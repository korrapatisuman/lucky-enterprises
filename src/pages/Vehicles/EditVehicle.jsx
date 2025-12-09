import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/vehicles.css";

function EditVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    title: "",
    type: "",
    rent: "",
    image: "",
  });

  useEffect(() => {
    // Fetch existing vehicle (dummy)
    setVehicle({
      title: "Swift Dzire",
      type: "Car",
      rent: 1500,
      image: "https://via.placeholder.com/200",
    });
  }, [id]);

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Vehicle:", vehicle);
    alert("Vehicle Updated Successfully");

    navigate("/vehicles");
  };

  return (
    <div className="vehicle-form-container">
      <h2>Edit Vehicle (ID: {id})</h2>

      <form onSubmit={handleSubmit} className="vehicle-form">
        <label>Title</label>
        <input type="text" name="title" value={vehicle.title} onChange={handleChange} />

        <label>Type</label>
        <input type="text" name="type" value={vehicle.type} onChange={handleChange} />

        <label>Rent Per Day (₹)</label>
        <input type="number" name="rent" value={vehicle.rent} onChange={handleChange} />

        <label>Image URL</label>
        <input type="text" name="image" value={vehicle.image} onChange={handleChange} />

        <button type="submit" className="btn-primary">Update Vehicle</button>
      </form>
    </div>
  );
}

export default EditVehicle;
