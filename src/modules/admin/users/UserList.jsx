import React from "react";
import { Link } from "react-router-dom";
import "../AdminStyles.css";   // GLOBAL ADMIN STYLES

const users = [
  { name: "Suman", email: "suman@gmail.com", role: "Admin", status: "Active" },
  { name: "Kiran", email: "kiran@gmail.com", role: "Manager", status: "Active" }
];

export default function UserList() {
  return (
    <div className="admin-page-wrapper">

      <h2 className="page-title">User Management</h2>

      <Link to="/admin/users/add">
        <button className="primary-btn">+ Add User</button>
      </Link>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
              <td>
                <Link to={`/admin/users/edit/${i}`} className="action-link">
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
