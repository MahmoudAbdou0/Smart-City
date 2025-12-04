import React from "react";

const StatsCard = ({ icon, title, value, change }) => {
  return (
    <div className="stats-card">
      <div className="stats-header">
        <span className="stats-icon">{icon}</span>
        <span className="stats-change">{change}</span>
      </div>
      <h4 className="stats-title">{title}</h4>
      <p className="stats-value">{value}</p>
    </div>
  );
};

export default StatsCard;
