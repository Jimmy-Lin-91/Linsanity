import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Explorer from './Explorer.jsx';
import bgm from '../dist/sound/BackgroundMusic.wav';
import typing from '../dist/sound/typing.wav';
import key from '../dist/sound/SingleKeyPress.wav';
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
    this.playTypingSoundHailing = this.playTypingSoundHailing.bind(this);
    this.playTypingSound = this.playTypingSound.bind(this);
    this.playTypingSoundExplorer = this.playTypingSoundExplorer.bind(this);
  }
  togglePlay() {
    this.setState({
      sound: !this.state.sound
    });
    if (!this.state.sound) {
      this.bgmSound.play();
    } else {
      this.bgmSound.pause();
    }
  }
  componentDidMount(){
    this.keySound = new Audio(key);
    this.typingSound = new Audio(typing);
    this.bgmSound = new Audio(bgm);
  }
  playTypingSoundHailing() {
    this.typingSound.play();
    setTimeout(() => {
      this.typingSound.pause();
      this.typingSound.currentTime = 0;
    }, 1500)
  }
  playTypingSound()  {
    this.typingSound.play();
    setTimeout(() => {
      this.typingSound.pause();
      this.typingSound.currentTime = 0;
    }, 1300)
  }
  playTypingSoundExplorer() {
    if (this.state.sound) {
      setTimeout(() => {
        this.typingSound.play()
      }, 1750);
      setTimeout(() => {
        this.typingSound.pause();
        this.typingSound.currentTime = 0;
      }, 4000)
    }
  }
  playKeySound () {
     this.keySound.play();
  }
  playBgmSound () {
    let audioPromise = this.bgmSound.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then(_=> {
          console.log('BGM playing')
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
  render() {
    let {sound} = this.state;
    const renderSoundButton = () => {
      if (!sound) {
        return <button className="sound-button" onClick={() => this.togglePlay()}>Enable Sound</button>
      } else {
        return <button className="sound-button" onClick={() => this.togglePlay()}>Enable Stealth</button>
      }
    }
    const audioConditionalRender = () => {
      if (!this.state.sound) {
        return (
            <div>
              <nav className="nav-container">
                <ul className="nav">
                <li>
                  <Link
                  className="link" to="/">Headquarters</Link>
                </li>
                <div>
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
              {renderSoundButton()}
            </div>
        )
      } else {
        return (
          <div>
          <nav className="nav-container">
            <ul className="nav">
            <li>
              <Link
              className="link" to="/" onClick={this.playKeySound}>Headquarters</Link>
            </li>
            <div>
            </div>
            <li>
              <Link
              className="link" to="/explorer" onClick={this.playKeySound}>Explorer</Link>
            </li>
            <li>
              <Link
              className="link" to="/projects" onClick={this.playKeySound}>Projects</Link>
            </li>
            </ul>
          </nav>
          {renderSoundButton()}
        </div>
        )
      }
    }
      return(
        <Router>
            {audioConditionalRender()}
            <Switch>
              <Route path='/explorer'>
                <Explorer
                handleAccept={this.handleAccept}
                hailing={this.state.hailing}
                typingSound={this.typingSound}
                sound={this.state.sound}
                playTypingSound={this.playTypingSound}
                playTypingSoundHailing={this.playTypingSoundHailing}
                playTypingSoundExplorer={this.playTypingSoundExplorer}
                playKeySound={this.playKeySound}
                addNewLine={this.addNewLine}
                removeOldLine={this.removeOldLine}
                />
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