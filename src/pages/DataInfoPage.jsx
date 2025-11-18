// src/pages/DataInfoPage.jsx
import { Link } from "react-router-dom";

export default function DataInfoPage() {
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
          to="/home"
        >
          Back
        </Link>
        <h1 style={headerStyle}>Data & AI Information</h1>

        <p style={textStyle}>
          How my images are stored: Images are stored locally and only sent to the AI to be analyzed. 
          Once the analysis is complete, images can be deleted to protect privacy. 
        </p>
        <p style={textStyle}>
          How AI is used: The AI analyzes your image to provide insight on accesibility information. 
          The model will provide suggestions on the image given. 
        </p>
        <p style={textStyle}>
           What data is stored: Images are not stored. The only data stored is the login information 
           to ensure that only you can access your account. Your account can be deleted at any time. 
        </p>
      </div>
    </div>
  );
}

