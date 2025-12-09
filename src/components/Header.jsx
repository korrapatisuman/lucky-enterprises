import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Lucky</h2>
        <h4>Enterprises</h4>
      </div>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/book-trip">Book Trip</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/home-loan">Home Loan</Link>
        <Link to="/vehicles-dashboard">Buy & Sell</Link>
        <Link to="/consultancy">Consultancy</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/admin">Admin</Link>
        <Link className="auth-btn" to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
