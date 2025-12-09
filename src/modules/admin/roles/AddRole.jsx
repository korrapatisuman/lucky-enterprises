import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRole() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState({
    vehicles: false,
    realEstate: false,
    homeLoan: false,
    consultancy: false,
    admin: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Role created successfully!");
    navigate("/admin/roles");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Add Role</h2>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Role Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter role name"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="section-title">Permissions</div>

        <div className="checkbox-list">
          {Object.entries(permissions).map(([key, val]) => (
            <label className="checkbox-item" key={key}>
              <input
                type="checkbox"
                checked={val}
                onChange={() =>
                  setPermissions({ ...permissions, [key]: !val })
                }
              />
              <span className="checkbox-label">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </label>
          ))}
        </div>

        <button type="submit" className="btn-primary">
          Save Role
        </button>
      </form>
    </div>
  );
}

export default AddRole;
