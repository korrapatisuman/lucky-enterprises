import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../AdminStyles.css";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Demo User",
    email: "demo@gmail.com",
    role: "Admin",
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert(`User ID ${id} updated successfully!`);
    navigate("/admin/users");
  };

  return (
    <div className="page-container">

      <div className="page-header">
        <h2>Edit User</h2>
      </div>

      <div className="admin-card">
        <form className="form" onSubmit={handleSave}>

          <label>Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label>Role</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>

          <button className="btn-primary">Save Changes</button>

        </form>
      </div>

    </div>
  );
}

export default EditUser;
