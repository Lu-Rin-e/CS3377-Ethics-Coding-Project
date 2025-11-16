// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AIPage from "./pages/AIPage";
import PrivacyPage from "./pages/PrivacyPage";
import DataInfoPage from "./pages/DataInfoPage";
import TwoFactorPage from "./pages/TwoFactorPage"; 
import SignUpPage from "./pages/SignUpPage"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/data-info" element={<DataInfoPage />} />
        <Route path="/2fa" element={<TwoFactorPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
} 

// src/services/firebase.js
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
/** 
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER",
  appId: "YOUR_APP_ID" 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);*/

