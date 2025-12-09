import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./realEstate.css";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "Sample Property",
    price: "45 Lakhs",
    location: "Hyderabad",
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Updated Successfully!");
    navigate("/real-estate/properties");
  };

  return (
    <div className="re-container">
      <h1>Edit Property #{id}</h1>

      <form className="re-form" onSubmit={onSubmit}>
        <label>Property Title *</label>
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <label>Price *</label>
        <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />

        <label>Location *</label>
        <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />

        <label>Description</label>
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>

        <button className="btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditProperty;
