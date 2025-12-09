import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./realEstate.css";

const AddProperty = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.location) {
      alert("Please fill all required fields");
      return;
    }
    alert("Property added successfully!");
    navigate("/real-estate/properties");
  };

  return (
    <div className="re-container">
      <h1 className="re-title">Add New Property</h1>

      <form className="re-form" onSubmit={handleSubmit}>
        <label>Property Title *</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <label>Price *</label>
        <input
          type="text"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <label>Location *</label>
        <input
          type="text"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <label>Description</label>
        <textarea
          rows="4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProperty;
