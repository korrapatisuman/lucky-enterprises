import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AdminStyles.css";

export default function AddUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Added Successfully!");
    navigate("/admin/users");
  };

  return (
    <div className="page-container">
      
      <div className="page-header">
        <h2>Add User</h2>
      </div>

      <div className="admin-card">
        <form onSubmit={handleSubmit} className="form">

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter full name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
          />

          <label>Role</label>
          <select 
            name="role" 
            value={form.role} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Staff">Staff</option>
          </select>

          <label>Status</label>
          <select 
            name="status" 
            value={form.status} 
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button type="submit" className="btn-primary">Save User</button>
        </form>
      </div>

    </div>
  );
}
