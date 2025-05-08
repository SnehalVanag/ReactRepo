import React from 'react';
import './Stats.css';
import { FaTrophy, FaUsers, FaUserGraduate, FaBuilding } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <FaTrophy className="stat-icon" />
          <div className="stat-number">20+ Years</div>
          <div className="stat-label">Successfully Completed</div>
        </div>
        
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div className="stat-number">208</div>
          <div className="stat-label">Batches</div>
        </div>
        
        <div className="stat-item">
          <FaUserGraduate className="stat-icon" />
          <div className="stat-number">1000</div>
          <div className="stat-label">No of Students</div>
        </div>
        
        <div className="stat-item">
          <FaBuilding className="stat-icon" />
          <div className="stat-number">12</div>
          <div className="stat-label">Corporate Workshops</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;