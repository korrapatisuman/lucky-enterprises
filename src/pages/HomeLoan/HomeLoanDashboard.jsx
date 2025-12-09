import { Link } from "react-router-dom";
import "./homeLoan.css";

function HomeLoanDashboard() {
  return (
    <div className="home-dashboard">
      <h1>🏠 Home Loan Services</h1>
      <p>Select a service below to continue.</p>

      <div className="home-dashboard-cards">

        <Link to="/home-loan/apply" className="hl-card">
          <h3>Apply for Loan</h3>
          <p>Submit a new loan request</p>
        </Link>

        <Link to="/home-loan/calculator" className="hl-card">
          <h3>Loan EMI Calculator</h3>
          <p>Calculate EMI based on amount, tenure</p>
        </Link>

        <Link to="/home-loan/loans" className="hl-card">
          <h3>Loan List</h3>
          <p>View all loan applications</p>
        </Link>

        <Link to="/home-loan/status" className="hl-card">
          <h3>Check Loan Status</h3>
          <p>Track your loan application progress</p>
        </Link>

      </div>
    </div>
  );
}

export default HomeLoanDashboard;
