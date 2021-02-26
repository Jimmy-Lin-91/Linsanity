import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Loading from './Loading.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <Router>
        <div class="nav_container">
          <nav>
            <ul className="nav">
             <li>
               <Link
               className="link" to="/">Headquarter</Link>
             </li>
             <li>
               <Link
               className="link" to="/about">Explorer</Link>
             </li>
             <li>
               <Link
               className="link" to="/projects">Projects</Link>
             </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

};
export default App;