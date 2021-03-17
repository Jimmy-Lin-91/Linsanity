import React from 'react';

var LoadingWithSound = ({ sound, handleAccept, playTypingSound}) => {
  var acceptAndSound = () => {
    handleAccept();
  }
    return (
      <div className="typewriter">
        {playTypingSound()}
        <p>Incoming transmission...  </p>
        <button onClick={() => acceptAndSound()} className="hailing-button">Accept</button>
      </div>
    )
};


export default LoadingWithSound;