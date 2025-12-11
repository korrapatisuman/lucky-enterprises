import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo">
        <h2>Lucky</h2>
        <h4>Enterprises</h4>
      </div>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/book-trip">Book Trip</Link>
        <Link to="/vehicles/bookings">Bookings</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/home-loan">Home Loan</Link>
        <Link to="/vehicles-dashboard">Buy & Sell</Link>
        <Link to="/consultancy">Consultancy</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/admin">Admin</Link>

        {/* AUTH BUTTON */}
        {!user ? (
          <Link className="auth-btn" to="/login">Login</Link>
        ) : (
          <button className="auth-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
