import React from "react";
import "../AdminStyles.css";

function ProfileSettings() {
  return (
    <div className="page-container">

      <div className="page-header">
        <h2>Profile Settings</h2>
      </div>

      <div className="admin-card">
        <form className="form">

          <label>Full Name:</label>
          <input type="text" placeholder="Admin User" />

          <label>Email:</label>
          <input type="email" placeholder="admin@gmail.com" />

          <label>Change Password:</label>
          <input type="password" placeholder="New Password" />

          <button className="btn-primary">Update Profile</button>

        </form>
      </div>

    </div>
  );
}

export default ProfileSettings;
