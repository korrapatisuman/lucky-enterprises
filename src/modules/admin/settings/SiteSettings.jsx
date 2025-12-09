import React from "react";
import "../AdminStyles.css";

function SiteSettings() {
  return (
    <div className="page-container">

      <div className="page-header">
        <h2>Site Settings</h2>
      </div>

      <div className="admin-card">
        <form className="form">

          <label>Website Title:</label>
          <input type="text" placeholder="Lucky Enterprises" />

          <label>Support Email:</label>
          <input type="email" placeholder="support@lucky.com" />

          <label>Footer Text:</label>
          <input type="text" placeholder="© 2025 Lucky Enterprises" />

          <button className="btn-primary">Save Settings</button>

        </form>
      </div>

    </div>
  );
}

export default SiteSettings;
