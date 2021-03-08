import React from 'react';

var Loading = ({handleAccept, playKeySound}) => {
  const handleAcceptAndKeySound = (e) => {
    handleAccept();
    playKeySound();
  }
  return (
    <div className="typewriter">
      <p>Incoming transmission...  </p>
      <button onClick={() => handleAcceptAndKeySound()} className="hailing_button">Accept</button>
    </div>
  )
};


export default Loading;