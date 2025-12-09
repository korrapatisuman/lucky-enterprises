import React from "react";
import "./realEstate.css";

const LoanServices = () => {
  return (
    <div className="re-container">
      <h1 className="re-title">Home & Property Loans</h1>

      <ul className="loan-list">
        <li>🏦 Home Loan (Up to 80% Funding)</li>
        <li>📄 Land Purchase Loan</li>
        <li>🏗️ Construction Loan</li>
        <li>💼 Commercial Property Loan</li>
        <li>💰 Low EMI / Flexible Plans</li>
      </ul>

      <button className="btn-primary">Apply for Loan</button>
    </div>
  );
};

export default LoanServices;
