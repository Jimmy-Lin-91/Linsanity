import React, { useEffect, useState } from 'react';
import HomeTexts from './HomeTexts.jsx';
var Home = ({ sound, playTypingSound }) => {
    if (sound) {
      return (
        <div className="home-container">
          {playTypingSound()}
          <HomeTexts/>
        </div>
      )
    } else {
      return (
        <div className="home-container">
          <HomeTexts/>
        </div>
      )
    }
}


export default Home;