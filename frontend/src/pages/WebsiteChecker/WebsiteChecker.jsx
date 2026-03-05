import React from "react";
import "./WebsiteChecker.css";

function WebsiteChecker() {
  return (
    <div className="website-container">

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