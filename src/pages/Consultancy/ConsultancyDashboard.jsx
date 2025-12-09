import { Link } from "react-router-dom";
import "./consultancy.css";

function ConsultancyDashboard() {
  return (
    <div className="con-dashboard">
      <h1>📘 Consultancy Services</h1>
      <p>Select a service to get expert help</p>

      <div className="con-cards">

        <Link to="/consultancy/services" className="con-card">
          <h3>Our Services</h3>
          <p>Explore all available consultancy services</p>
        </Link>

        <Link to="/consultancy/enquiry" className="con-card">
          <h3>Request Consultation</h3>
          <p>Submit your enquiry and our team will contact you</p>
        </Link>

      </div>
    </div>
  );
}

export default ConsultancyDashboard;
