// src/pages/HomePage.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signOut, deleteUser } from "firebase/auth";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  //used copilot assistance here
  useEffect(() => {
    setUser(auth.currentUser);
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSignOut = async () => {
      await signOut(auth);
      navigate("/");
  };

  //used copilot assistance here
  const handleDeleteAccount = async () => {
    if (!user) return;
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;
      await deleteUser(user);
      alert("Account deleted.");
      navigate("/");
  };
  
  const pageStyle = {
    display: "flex",
    flexDirection: "column", 
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
    padding: "2rem",
    boxSizing: "border-box"
  };

  const topBarStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "1.5rem",
    position: "relative",
  };

  
  const cardStyle = {   
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "black"
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "140px",
    height: "140px",
    borderRadius: "15px",
    border: "2px solid #ccc",
    fontSize: "3rem",
    cursor: "pointer",
    color: "black",
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

  const profileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    marginRight: "1rem",
  };

  const footerStyle = {
    marginTop: "auto",
    fontSize: "0.9rem",
  };

  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
      <div style={profileMenuStyle}>
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
    </div>


      <div style={cardStyle}>
        <h1 style={headerStyle}>Documents</h1>

        <Link to="/ai" style={buttonStyle}>
          +
        </Link>
      </div>
      <div style={footerStyle}>
          <Link to="/data-info">Data Collection Info</Link>
        </div>
    </div>
  );
}
