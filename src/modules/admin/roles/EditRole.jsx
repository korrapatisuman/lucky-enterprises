import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRole() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [role, setRole] = useState("Manager");
  const [permissions, setPermissions] = useState({
    vehicles: true,
    realEstate: false,
    homeLoan: true,
    consultancy: false,
    admin: false,
  });

  const saveRole = (e) => {
    e.preventDefault();
    alert(`Role ${id} updated successfully!`);
    navigate("/admin/roles");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Edit Role</h2>
        <p className="page-subtitle">Role ID: {id}</p>
      </div>

      <form className="form-card" onSubmit={saveRole}>
        <div className="form-group">
          <label>Role Name</label>
          <input
            type="text"
            className="input"
            value={role}
            required
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

export default EditRole;
