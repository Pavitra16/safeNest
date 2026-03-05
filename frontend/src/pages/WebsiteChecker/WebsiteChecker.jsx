import React from "react";
import "./WebsiteChecker.css";
import Navbar from "../../components/layout/Navbar";

function WebsiteChecker() {

  const isLoggedIn = true; // This would typically come from your auth logic
  return (
    <div className="website-container">
        <Navbar isLoggedIn={isLoggedIn}/>
      <div className="header">
        <p className="back">← Back to Dashboard</p>

        <div className="title-section">

          <div className="icon">
            🌐
          </div>

          <div>
            <h1>Website Authenticity Checker</h1>
            <p className="subtitle">
              Verify any website's legitimacy instantly
            </p>
          </div>

        </div>
      </div>


      <div className="form-card">

        <label>Website URL</label>

        <input
          type="text"
          placeholder="https://example.com"
        />

        <button className="check-btn">
          ✨ Check Website
        </button>

      </div>

    </div>
  );
}

export default WebsiteChecker;