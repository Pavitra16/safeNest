import React from "react";
import "./UserProfile.css";
import { NavLink } from "react-router-dom"
import { data, stats, user } from "../../data/profileData";
const UserProfile = () => {
  return (
    <div className="profile-container">
      {/* Header Card */}
      <div className="profile-header">
        <div className="user-info">
          <div className="avatar"></div>
          <div>
            <h2> {user.name} ✨</h2>
            <p>{user.email}</p>
          </div>
          <span className="status-dot"></span>
        </div>

        <div className="header-buttons">
          <button className="btn">Profile</button>
          <button className="btn">Logout</button>
        </div>

        {/* Stats */}
        <div className="stats">
  {stats.map((stat, index) => (
    <div className="stat-card" key={index}>
      <h3>{stat.value}</h3>
      <p>{stat.label}</p>
      <span className={stat.color}>{stat.note}</span>
    </div>
  ))}
  </div>
</div>

      {/* Fraud Tools */}
      <section className="tools-section">
        <h3>Fraud Detection Tools</h3>

       

<div className="tools-grid">

  <NavLink to="/jobscanner" className="tool-card no-underline text-inherit">
    <div className="icon">🔍</div>
    <h4>Job & Internship Checker</h4>
    <p>Verify job offers and internships</p>
  </NavLink>

  <NavLink to="/courses" className="tool-card no-underline text-inherit">
    <div className="icon">📚</div>
    <h4>Course & Certification Checker</h4>
    <p>Validate online courses</p>
  </NavLink>

  <NavLink to="/website" className="tool-card no-underline text-inherit">
    <div className="icon">🌐</div>
    <h4>Website Authenticity Checker</h4>
    <p>Check website legitimacy</p>
  </NavLink>

</div>
        
      </section>

      {/* Recent Scans */}
      

<section className="recent-section">
  <h3>Recent Scans</h3>

  <div className="scan-list">
    {data.map((scan) => (
      <div className="scan-item" key={scan.id}>
        <div>
          <p>{scan.site}</p>
          <span>{scan.time}</span>
        </div>

        <div className={`result ${scan.status}`}>
          {scan.score}
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default UserProfile;