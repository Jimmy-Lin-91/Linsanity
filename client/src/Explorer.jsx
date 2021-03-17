import React, { useState, useEffect } from 'react';
import LoadingWithSound from './LoadingWithSound.jsx';
import LoadingWithoutSound from './LoadingWithoutSound.jsx';
import StatusPanel from './StatusPanel.jsx';
import Story from './Story.jsx';


var Explorer = (props) => {
  const {hailing,
    handleAccept,
    playTypingSoundHailing,
    playTypingSound,
    sound,
    playTypingSoundExplorer,
    script,
    playStaticSound
  } = props;
  if (!hailing && sound) {
      return (
        <div className="hailing">
          <LoadingWithSound
            sound={sound}
            handleAccept={handleAccept}
            playTypingSound={playTypingSound}
          />
        </div>
      )
    } else if (!hailing && !sound) {
      return (
        <div className="hailing">
          <LoadingWithoutSound handleAccept={handleAccept}/>
        </div>
      )
    } else if (hailing && !sound) {
      return (
        <div className="about-container">
            <div className="col-1">
              <StatusPanel />
            </div>
              <div className="col-2" id="fade-in">
                <Story/>
              </div>
            <div className="col-3" id="fade-in">
              <div className="photo-container">
                <div className="photo-container-outeroutline">
                  <div className="photo-container-inneroutline">
                    <img src={'https://i.imgur.com/Tf72CGG.jpg'} className="photo"></img>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    } else {
      return (
        <div className="about-container">
            <div className="col-1">
              {playStaticSound()}
              <StatusPanel />
            </div>
              <div className="col-2" id="fade-in">
                <Story/>
              </div>
            <div className="col-3" id="fade-in">
              <div className="photo-container">
                <div className="photo-container-outeroutline">
                  <div className="photo-container-inneroutline">
                    <img src={'https://i.imgur.com/Tf72CGG.jpg'} className="photo"></img>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }

};

export default Explorer;