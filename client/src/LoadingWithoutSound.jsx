import React from 'react';

const LoadingWithoutSound = ({ handleAccept }) => {

  return (
    <div className="typewriter">
      <p>Incoming transmission...  </p>
      <button onClick={handleAccept}className="hailing-button">Accept</button>
    </div>
  )
}

export default LoadingWithoutSound;