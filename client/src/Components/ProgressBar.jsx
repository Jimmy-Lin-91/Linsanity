import React from 'react';

const ProgressBar = ({ name, progress, color }) => {
  return (
    <div className="progress-container">
      <h5>{name}</h5>
      <div className="progress-bar-container">
        <div className="progress-bar"
        style={{
          backgroundColor: `${color}`,
           width: `${progress}%`}}></div>
      </div>
    </div>
  )
}

export default ProgressBar;
