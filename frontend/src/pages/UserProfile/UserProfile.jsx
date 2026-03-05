import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
      {/* Header Card */}
      <div className="profile-header">
        <div className="user-info">
          <div className="avatar"></div>
          <div>
            <h2>Welcome, Student ✨</h2>
            <p>student@university.edu</p>
          </div>
          <span className="status-dot"></span>
        </div>

        <div className="header-buttons">
          <button className="btn">Profile</button>
          <button className="btn">Logout</button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <h3>24</h3>
            <p>Total Scans</p>
            <span className="green">+5 this week</span>
          </div>

          <div className="stat-card">
            <h3>18</h3>
            <p>Safe Results</p>
            <span className="green">75% safe rate</span>
          </div>

          <div className="stat-card">
            <h3>6</h3>
            <p>Threats Found</p>
            <span className="red">-2 from last week</span>
          </div>
        </div>
      </div>

      {/* Fraud Tools */}
      <section className="tools-section">
        <h3>Fraud Detection Tools</h3>

        <div className="tools-grid">
          <div className="tool-card">
            <div className="icon">🔍</div>
            <h4>Job & Internship Checker</h4>
            <p>Verify job offers and internships</p>
          </div>

          <div className="tool-card">
            <div className="icon">📚</div>
            <h4>Course & Certification Checker</h4>
            <p>Validate online courses</p>
          </div>

          <div className="tool-card">
            <div className="icon">🌐</div>
            <h4>Website Authenticity Checker</h4>
            <p>Check website legitimacy</p>
          </div>
        </div>
      </section>

      {/* Recent Scans */}
      <section className="recent-section">
        <h3>Recent Scans</h3>

        <div className="scan-list">
          <div className="scan-item">
            <div>
              <p>techcorp-careers.com</p>
              <span>2 hours ago</span>
            </div>
            <div className="result safe">92/100 SAFE</div>
          </div>

          <div className="scan-item">
            <div>
              <p>free-certifications.org</p>
              <span>1 day ago</span>
            </div>
            <div className="result suspicious">38/100 SUSPICIOUS</div>
          </div>

          <div className="scan-item">
            <div>
              <p>legit-internships.com</p>
              <span>3 days ago</span>
            </div>
            <div className="result danger">12/100 DANGEROUS</div>
          </div>

          <div className="scan-item">
            <div>
              <p>coursera.org</p>
              <span>5 days ago</span>
            </div>
            <div className="result safe">96/100 SAFE</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;