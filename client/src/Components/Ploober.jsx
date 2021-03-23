import React from 'react';

const Ploober = () => {
  return(
    <div className="projects-ploober">
      <a href="https://github.com/Wolf-Of-Call-Street/Ploober-React-Native" target="blank">
        <img src="https://media.giphy.com/media/GdFAvyOJ0BsrGs82yq/giphy.gif" className="ploober-gif"></img>
      </a>
      <div className="ploober-description" style={{padding: '5px'}}>
        <div style={{marginBottom: '3px'}}>
          <p><b>GitHub: </b><a href="https://github.com/Wolf-Of-Call-Street/Ploober-React-Native" target="blank">Ploober</a></p>
        </div>
          <p>Tired of the busy layout of Yelp and Google? Want to make your personal freedoms more personal?</p>
          <br></br>
          <p>Introducing Ploober: Uber for Plumbing Services</p>
          <br></br>
          <p>From the tireless team at <b>Wolves of Call-Street</b> comes this summer's tepid app: <b>Ploober</b>!
          </p>
          <br></br>
          <p>Combining <b>React Native, JWT, Mongo Atlas, and Firebase</b>, this app gives you plumbing services in your immediate area without all the frills!</p>
          <br></br>
          <p>Your #1 choice to help with #2 problems!</p>
      </div>
    </div>
  )
}

export default Ploober;