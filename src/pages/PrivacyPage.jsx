// src/pages/PrivacyPage.jsx
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
    padding: "1rem",
  };

  const headerStyle = {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <div>
        <Link
          to="/"
        >
          Back
        </Link>
        <h1 style={headerStyle}>Privacy Policy</h1>

        <p style={textStyle}>
          What information is collected: The only information used is your email and password, 
          ensuring only you can access your account. This data can be deleted at any time.
        </p>
        <p style={textStyle}>
        How information is protected: All login is handled by Firebase, and 2FA is used to ensure security.
        </p>
        <p style={textStyle}>
          Your information is not shared with any third parties. 
          </p>
      </div>
    </div>
  );
}
