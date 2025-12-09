import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from "../utils/validation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    if (!isEmail(email)) {
      setError("Enter valid email");
      return;
    }

    // TODO: call backend /api/auth/login
    // For now fake success:
    alert("Login successful (mock)");
    navigate("/");
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>

      <p style={{marginTop:12}}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
