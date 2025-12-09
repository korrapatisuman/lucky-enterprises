import { useState } from "react";
import "./vehicles.css";

function SellVehicle() {
  const [formData, setFormData] = useState({
    owner: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Vehicle posted successfully!");
  }

  return (
    <div className="sell-container">
      <h2>Sell Your Vehicle</h2>

      <form onSubmit={handleSubmit}>

        <label>Owner Name</label>
        <input name="owner" onChange={handleChange} required />

        <label>Phone</label>
        <input name="phone" onChange={handleChange} required />

        <label>Brand</label>
        <input name="brand" onChange={handleChange} required />

        <label>Model</label>
        <input name="model" onChange={handleChange} required />

        <label>Manufacturing Year</label>
        <input name="year" onChange={handleChange} required />

        <label>Expected Price</label>
        <input name="price" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SellVehicle;
