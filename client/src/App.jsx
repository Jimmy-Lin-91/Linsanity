import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Explorer from './Explorer.jsx';
import Loading from './Loading.jsx';
// const bgm = require('../sound/BackgroundMusic.wav');
// const typing = require('../sound/typing.wav');
// const key = require('../sound/SingleKeyPress.wav');
import bgm from '../dist/sound/BackgroundMusic.wav';
import typing from '../dist/sound/typing.wav';
import Key from '../dist/sound/SingleKeyPress.wav';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      hailing: false,
      sound: false,
    }
    this.handleAccept = this.handleAccept.bind(this);
    this.playKeySound = this.playKeySound.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }
  togglePlay() {
    this.setState({
      sound: !this.state.sound
    })
  }
  playKeySound () {
    const keySound = new Audio (Key);
    const audioPromise = keySound.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {
          console.log('Beep!!');
        })
        .catch(err => {
          console.info(err);
        })
    }
  }
  handleAccept(e) {
    this.setState({
      hailing: true
    })
  }
  //use componentDidMount() to render loading until state is updated with 'accept';
  render() {
      return(
        <Router>
            <div>
              <nav className="nav_container">
                <ul className="nav">
                <li>
                  <Link
                  className="link" to="/">Headquarters</Link>
                </li>
                <div>
                  { if (!this.state.sound) {
                    return (
                      <button onClick={() => this.togglePlay()}>Dramatics</button>
                    )
                  } else {
                    return (
                      <button onClick={() => this.togglePlay()}>Kill The Beat</button>
                    )
                  }}
                </div>
                <li>
                  <Link
                  className="link" to="/explorer">Explorer</Link>
                </li>
                <li>
                  <Link
                  className="link" to="/projects">Projects</Link>
                </li>
                </ul>
              </nav>
            </div>

            <Switch>
              <Route path='/explorer'>
                <Explorer hailing={this.state.hailing} handleAccept={this.handleAccept}/>
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
        </Router>
      )
  }

};
export default App;