import { useState } from "react";
import { validateRegister } from "../utils/validation";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (k, v) => setForm(s => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const val = validateRegister(form);
    setErrors(val);
    if (Object.keys(val).length) return;

    // TODO: call backend /api/auth/register
    alert("Registration successful (mock)");
    navigate("/login");
  };

  return (
    <div className="auth-card">
      <h2>Create Account</h2>

      <form onSubmit={submit}>
        <label>Name</label>
        <input value={form.name} onChange={(e)=>onChange("name", e.target.value)} />
        {errors.name && <div className="error">{errors.name}</div>}

        <label>Email</label>
        <input value={form.email} onChange={(e)=>onChange("email", e.target.value)} />
        {errors.email && <div className="error">{errors.email}</div>}

        <label>Phone</label>
        <input value={form.phone} onChange={(e)=>onChange("phone", e.target.value)} />
        {errors.phone && <div className="error">{errors.phone}</div>}

        <label>Password</label>
        <input type="password" value={form.password} onChange={(e)=>onChange("password", e.target.value)} />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
