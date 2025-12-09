import { useState } from "react";
import "./homeLoan.css";

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    amount: "",
    tenure: "",
    income: "",
    propertyType: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Loan Application Submitted Successfully!");
  }

  return (
    <div className="loan-form">
      <h2>Home Loan Application</h2>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input name="fullName" onChange={handleChange} required />

        <label>Phone Number</label>
        <input name="phone" onChange={handleChange} required />

        <label>Loan Amount</label>
        <input name="amount" type="number" onChange={handleChange} required />

        <label>Tenure (Years)</label>
        <input name="tenure" type="number" onChange={handleChange} required />

        <label>Monthly Income</label>
        <input name="income" type="number" onChange={handleChange} required />

        <label>Property Type</label>
        <select name="propertyType" onChange={handleChange}>
          <option>Apartment</option>
          <option>Independent House</option>
          <option>Plot</option>
          <option>Commercial</option>
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default LoanApplicationForm;
