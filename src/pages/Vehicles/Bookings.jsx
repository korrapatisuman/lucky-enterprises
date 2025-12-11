import { useState } from "react";

function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.vehicle || !formData.date) {
      alert("All fields are required");
      return;
    }

    alert("Booking submitted successfully (mock)");
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Vehicle Booking / Enquiry</h2>

      <form className="booking-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle Name"
          value={formData.vehicle}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <button type="submit" className="booking-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Bookings;
