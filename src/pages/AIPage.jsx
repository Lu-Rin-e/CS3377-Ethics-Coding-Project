// src/pages/AIPage.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, deleteUser } from "firebase/auth";

export default function AIPage() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const restartAnalysis = () => setAnalysis("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  //used some copilot assistance here
  useEffect(() => {
      setUser(auth.currentUser);
      if (!auth.currentUser) {
        navigate("/");
      }
    }, [navigate]);
  
    const handleSignOut = async () => {
        await signOut(auth);
        navigate("/");
    };

  //used some copilot assistance here
    const handleDeleteAccount = async () => {
      if (!user) return;
      const confirmDelete = window.confirm("Are you sure you want to delete your account?");
      if (!confirmDelete) return;
        await deleteUser(user);
        alert("Account deleted.");
        navigate("/");
    };

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }
    setLoading(true);
    setAnalysis("Analyzing image...");
    try {
      const form = new FormData();
      form.append("image", image);

      const resp = await fetch("/api/analyze", {
        method: "POST",
        body: form,
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || "Server error");
      }

      const data = await resp.json();
      setAnalysis(data.analysis || JSON.stringify(data));
    } catch (err) {
      console.error(err);
      setAnalysis("Error during analysis: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

    const clearAnalysis = () => {
    setAnalysis("");
    setImage(null);
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
    padding: "2rem",
  };

  const topBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  };

  
  const cardStyle = {
    flex: 1,
    display: "flex",
    gap: "2rem"
  };

  const leftStyle = {
    flex: 1,
    borderRadius: "10px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const rightStyle = {
    flex: 1.5,
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "10px"
  };

  const inputStyle = {
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const buttonStyle = {
    padding: "0.5rem",
    width: "300px",
    height: "40px",
    backgroundColor: "#7c3aed", 
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "1rem",
  };

  const imageBoxStyle = {
    width: "100%",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    minHeight: "350px",
    whiteSpace: "pre-wrap",
    margin: "1rem 0"
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "50px",
    right: "0",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    width: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
    display: menuOpen ? "block" : "none",
  };

  const dropdownItemStyle = {
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "4px",
    backgroundColor: "#f8f8f8",
  };

  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <Link
          to="/home"
          //style={{buttonStyle}}
        >
          Back
        </Link>

        <img
          src="/profilePictureIcon.png"
          alt="Profile"
          style={{ width: 40, cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div style={dropdownMenuStyle}>
      {user && (
            <p style={{ padding: "10px", fontSize: "0.9rem" }}>
            User: <br />
            {user.email}</p>
          )}
        <button style={dropdownItemStyle} onClick={handleSignOut}>
      Sign Out
    </button>
    <button style={dropdownItemStyle} onClick={handleDeleteAccount}>
      Delete Account
    </button>
      </div>

      </div> 

      <div style={cardStyle}>
        <div style={leftStyle}>
          <h1 style={{ fontSize: "1.5rem", color: "black", fontWeight: "bold", marginBottom: "1rem" }}>
            AI Analysis
          </h1>
          <p style={{color: "black", marginBottom: "0.5rem" }}>
            Images are processed locally.
          </p>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={inputStyle}
          />

          <div style={imageBoxStyle}>
            {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{maxWidth: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <p style={{ color: "#888" }}>Preview will appear here</p>
          )}     
          </div>

          <button
              onClick={clearAnalysis}
              style={{buttonStyle}}
            >
              <img src="/trashcanIcon.png" style={{ width: 40}} alt="Delete" />
            </button>
        </div>
        
        <div style={rightStyle}>
          <button onClick={handleAnalyze} style={buttonStyle}>
            Run Analysis
          </button>

          <div style={imageBoxStyle}>
            {analysis || "Upload an image to begin analysis."}
          </div>

          <button onClick={restartAnalysis} style={buttonStyle}>
            Restart Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
