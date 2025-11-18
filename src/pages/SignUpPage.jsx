// src/pages/SignUpPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //used some copilot assistance here
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/2fa"); 
    } catch (error) {
      alert("Sign-up failed: " + error.message);
    }
  };

  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
  };

  const leftStyle = {
    flex: 1,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.5rem",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
        <div style={leftStyle}>
          <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#555" }}>
            Sign Up
          </h1>

          <label>Email</label>
          <input
            type="email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <input
              type={showPassword ? "text" : "password"}
              style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{ marginLeft: "0.5rem" }}
            >
              <img
                src="/showPasswordImage.png"
                alt="Show password"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </div>

          <button onClick={handleSignUp} style={buttonStyle}>
            Sign Up
          </button>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
            <Link to="/">Login here</Link>
          </div>
        </div>

        <div style={rightStyle}>
          <img
            src="/imageAnalyzerFront.png"
            alt="Analyzer"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
  );
}
