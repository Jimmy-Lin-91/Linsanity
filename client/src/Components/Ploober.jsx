import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Ploober = () => {
  return(
    <div className="projects-ploober-container">
      <div className="ploober-accordion">
        <a href="https://github.com/Wolf-Of-Call-Street/Ploober-React-Native" target="blank" className="ploober-gif">
          <img src="https://media.giphy.com/media/GdFAvyOJ0BsrGs82yq/giphy.gif" ></img>
        </a>
        <div className="ploober-description" style={{padding: '5px'}}>
          <div>
            <p><b>GitHub: </b><a href="https://github.com/Wolf-Of-Call-Street/Ploober-React-Native" target="blank">Ploober</a></p>
          </div>
            <p>Tired of the busy layout of Yelp and Google? Want to make your personal freedoms more personal?</p>
            <br></br>
            <p>Introducing Ploober: Uber for Plumbing Services.</p>
            <br></br>
            <p>From the tireless team at <b>Wolves of Call-Street</b> comes this summer's tepid app: <b>Ploober</b>!
            </p>
            <br></br>
            <p><b>React Native, JWT, Mongo Atlas, and Firebase</b></p>
            <br></br>
            <p>Your #1 choice to help with #2 problems!</p>
            <br></br>
            <a href="https://github.com/Wolf-Of-Call-Street/Ploober-React-Native" target="blank">
              <FiGithub style={{width: '18px', height: '18px', color: 'white'}}/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Ploober;