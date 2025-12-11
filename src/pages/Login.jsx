import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from "../utils/validation";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
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

    try {
      // TODO: Replace mock with backend API call
      // const response = await fetch("/api/auth/login", { ... });

      // ---- MOCK LOGIN SUCCESS ----
      const fakeToken = "1234567890abcdef";
      localStorage.setItem("authToken", fakeToken);

      setUser({ email }); // set logged-in user
      navigate("/dashboard"); // redirect
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: 12 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
