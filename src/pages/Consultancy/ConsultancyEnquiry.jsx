import { useState } from "react";
import "./consultancy.css";

function ConsultancyEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your enquiry has been submitted!");
  }

  return (
    <div className="con-enquiry">
      <h2>Request Consultation</h2>

      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input name="name" required onChange={handleChange} />

        <label>Phone Number</label>
        <input name="phone" required onChange={handleChange} />

        <label>Service Type</label>
        <select name="service" required onChange={handleChange}>
          <option>Select a Service</option>
          <option>Real Estate Guidance</option>
          <option>Home Loan Support</option>
          <option>Business Registration</option>
          <option>Insurance Services</option>
          <option>Tax Filing (ITR)</option>
        </select>

        <label>Your Message</label>
        <textarea name="message" onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ConsultancyEnquiry;
