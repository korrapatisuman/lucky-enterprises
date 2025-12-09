import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="admin-grid">

        <Link to="/admin/users" className="admin-card">
          <h3>Users Management</h3>
          <p>View, Add, Edit Users</p>
        </Link>

        <Link to="/admin/roles" className="admin-card">
          <h3>Roles & Permissions</h3>
          <p>Assign module-level access</p>
        </Link>

        <Link to="/admin/settings" className="admin-card">
          <h3>System Settings</h3>
          <p>Site configuration & preferences</p>
        </Link>

        <Link to="/admin/reports/revenue" className="admin-card">
          <h3>Reports</h3>
          <p>Revenue, Bookings, Usage</p>
        </Link>

      </div>
    </div>
  );
}

export default AdminDashboard;
