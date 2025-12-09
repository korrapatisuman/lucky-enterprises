import { Link } from "react-router-dom";

function RolesList() {
  const roles = [
    { id: 1, role: "Admin", access: "Full Access" },
    { id: 2, role: "Manager", access: "Limited Access" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Roles & Permissions</h2>
        <Link to="/admin/roles/add" className="add-btn">+ Add Role</Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Access Level</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {roles.map((r) => (
            <tr key={r.id}>
              <td>{r.role}</td>
              <td>{r.access}</td>
              <td className="actions-cell">
                <Link 
                  to={`/admin/roles/edit/${r.id}`} 
                  className="action-btn edit"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RolesList;
