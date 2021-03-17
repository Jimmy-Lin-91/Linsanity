import React from 'react';

var LoadingWithSound = ({ sound, handleAccept, playTypingSound, playKeySound }) => {
  var acceptAndSound = () => {
    handleAccept();
    playKeySound();
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