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
    playKeySound,
    script,
    addNewLine,
    removeOldLine
  } = props;
  if (!hailing && sound) {
      return (
        <div className="hailing">
          <LoadingWithSound
            sound={sound}
            handleAccept={handleAccept}
            playTypingSound={playTypingSound}
            playKeySound={playKeySound}
          />
        </div>
      )
    } else if (!hailing && !sound) {
      return (
        <div className="hailing">
          <LoadingWithoutSound handleAccept={handleAccept}/>
        </div>
      )
    } else {
      return (
        <div className="about_container">
            <div className="col-1" id="fade-in">
              <div className="description_1_container">
                <Story addNewLine={addNewLine} removeOldLine={removeOldLine}/>
              </div>
            </div>
            <div className="col-2" id="fade-in">
              <div className="photo_container">
                <div className="photo_container_outeroutline">
                  <div className="photo_container_inneroutline">
                    <img src={'https://i.imgur.com/Tf72CGG.jpg'} className="photo"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <StatusPanel />
            </div>
        </div>
      )
  }
};

export default Explorer;