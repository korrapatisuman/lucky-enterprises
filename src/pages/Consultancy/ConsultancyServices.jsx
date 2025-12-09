import { Link } from "react-router-dom";
import "./consultancy.css";

function ConsultancyServices() {
  const services = [
    { id: 1, title: "Real Estate Guidance", desc: "Expert support for buying/selling property." },
    { id: 2, title: "Home Loan Support", desc: "Help in loan applications & approvals." },
    { id: 3, title: "Business Registration", desc: "GST, MSME, Trade License Registration." },
    { id: 4, title: "Insurance Services", desc: "Life, Vehicle, Health Insurance Guidance." },
    { id: 5, title: "Tax Filing (ITR)", desc: "Income tax filing & documentation help." },
  ];

  return (
    <div className="con-services">
      <h2>Our Consultancy Services</h2>

      <div className="service-list">
        {services.map(s => (
          <div className="service-card" key={s.id}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>

            <Link to={`/consultancy/details/${s.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultancyServices;
