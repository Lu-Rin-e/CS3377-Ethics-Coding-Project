// src/pages/TwoFactorPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TwoFactorPage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (code.trim().length > 0) {
      navigate("/home");
    } else {
      alert("Enter any code to continue");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    textAlign: "center",
    letterSpacing: "3px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "1rem", color: "#555" }}>Two-Factor Authentication</h2>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Enter the 6-digit code sent to your email. (dummy version)
        </p>

        <input
          type="text"
          maxLength="6"
          placeholder="••••••"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={handleVerify}>
          Verify Code
        </button>
      </div>
    </div>
  );
}
