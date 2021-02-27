import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Explorer from './Explorer.jsx';
import Loading from './Loading.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      hailing: false
    }
    this.handleAccept = this.handleAccept.bind(this);
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