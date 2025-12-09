import { useParams, Link } from "react-router-dom";
import "./consultancy.css";

function ConsultancyDetails() {
  const { id } = useParams();

  const data = {
    1: {
      title: "Real Estate Guidance",
      description: "We help clients find property, negotiate deals, and handle documentation."
    },
    2: {
      title: "Home Loan Support",
      description: "Loan eligibility, documentation, bank submission & approval tracking."
    },
    3: {
      title: "Business Registration",
      description: "We handle GST, MSME, FSSAI, and Trade License setup."
    },
    4: {
      title: "Insurance Services",
      description: "Guidance on Life, Health, Vehicle and Term insurance."
    },
    5: {
      title: "Tax Filing (ITR)",
      description: "Income tax return filing & calculation support."
    }
  };

  const service = data[id];

  return (
    <div className="con-details">
      <h2>{service.title}</h2>
      <p>{service.description}</p>

      <Link to="/consultancy/enquiry" className="btn">Request Consultation</Link>
      <Link to="/consultancy/services" className="btn2">Back</Link>
    </div>
  );
}

export default ConsultancyDetails;
