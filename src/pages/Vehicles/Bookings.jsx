import { useState } from "react";
import "./vehicles.css";

function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    date: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Booking Request Submitted!");
  }

  return (
    <div className="booking-container">
      <h2>Vehicle Booking / Enquiry</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" required onChange={handleChange} />

        <label>Phone</label>
        <input name="phone" required onChange={handleChange} />

        <label>Vehicle Name</label>
        <input name="vehicle" required onChange={handleChange} />

        <label>Preferred Date</label>
        <input type="date" name="date" required onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Bookings;
