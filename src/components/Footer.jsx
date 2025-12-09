import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div>
            <h4>Lucky Enterprises</h4>
            <p className="small">All consultancy & services — Vehicles, Real Estate, Loans, Transport.</p>
          </div>

          <div>
            <h5>Explore</h5>
            <ul className="footer-links">
              <li>Vehicles</li>
              <li>Real Estate</li>
              <li>Home Loan</li>
              <li>Consultancy</li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <p className="small">Email: info@luckyenterprises.com</p>
            <p className="small">Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Lucky Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
