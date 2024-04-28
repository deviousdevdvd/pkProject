import React from 'react';

const PointsDisplay = ({ points }) => {
  return (
    <div className="points-display">
      <h2>Points</h2>
      <p>{points}</p> {/* Affiche les points passés en prop */}
    </div>
  );
};

export default PointsDisplay;
