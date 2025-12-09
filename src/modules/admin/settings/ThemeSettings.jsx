import React from "react";
import "../AdminStyles.css";

function ThemeSettings() {
  return (
    <div className="page-container">

      <div className="page-header">
        <h2>Theme Settings</h2>
      </div>

      <div className="admin-card">
        <form className="form">

          <label>Select Theme:</label>
          <select>
            <option>Light Mode</option>
            <option>Dark Mode</option>
            <option>Blue Theme</option>
          </select>

          <button className="btn-primary">Apply Theme</button>

        </form>
      </div>

    </div>
  );
}

export default ThemeSettings;
