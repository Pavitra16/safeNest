import React from "react";
import "./JobScanner.css";
import Navbar from "../../components/layout/Navbar";
function JobScanner() {
  const isLoggedIn = true; // This would typically come from your auth logic
  return (

    <div className="jobscanner-container">
      <Navbar isLoggedIn={isLoggedIn}/>
      <div className="header">
        <p className="back">← Back to Dashboard</p>

        <div className="title-section">
          <div className="icon">🔍</div>
          <div>
            <h1>Job & Internship Checker</h1>
            <p className="subtitle">Verify job offers before applying</p>
          </div>
        </div>
      </div>

      <div className="form-card">

        <label>Company Name</label>
        <input
          type="text"
          placeholder="e.g., TechCorp Inc."
        />

        <label>Job Title</label>
        <input
          type="text"
          placeholder="e.g., Software Engineer Intern"
        />

        <div className="row">
          <div className="field">
            <label>Location</label>
            <input
              type="text"
              placeholder="Remote / City"
            />
          </div>

          <div className="field">
            <label>Fee Required?</label>
            <input
              type="text"
              placeholder="Amount or None"
            />
          </div>
        </div>

        <label>Job Description</label>
        <textarea
          placeholder="Paste job description here..."
        />

        <button className="analyze-btn">
          ✨ Analyze Job Offer
        </button>

      </div>

    </div>
  );
}

export default JobScanner;