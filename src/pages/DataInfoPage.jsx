// src/pages/DataInfoPage.jsx
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
        <h1 style={headerStyle}>Data & AI Information</h1>

        <p style={textStyle}>
          This page explains how your uploaded images are processed,
          how accessibility analysis works, and what data is
          stored when using this tool.
        </p>
      </div>
    </div>
  );
}

