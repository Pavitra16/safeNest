import React from "react";
import "./CourseChecker.css";
import Navbar from "../../components/layout/Navbar";

function CourseChecker() {
  const isLoggedIn = true; // This would typically come from your auth logic
  return (
    <div className="course-container">
      <Navbar isLoggedIn={isLoggedIn}/>
      <div className="header">
        <p className="back">← Back to Dashboard</p>

        <div className="title-section">
          <div className="icon">📖</div>

          <div>
            <h1>Course & Certification Checker</h1>
            <p className="subtitle">
              Validate online courses before enrolling
            </p>
          </div>
        </div>
      </div>

      <div className="form-card">

        <label>Course / Platform Name</label>
        <input
          type="text"
          placeholder="e.g., MasterClass Pro Academy"
        />

        <label>Course URL</label>
        <input
          type="text"
          placeholder="https://..."
        />

        <label>Course Description / Claims</label>
        <textarea
          placeholder="Paste course description or claims..."
        />

        <button className="verify-btn">
          ✨ Verify Course
        </button>

      </div>

    </div>
  );
}

export default CourseChecker;