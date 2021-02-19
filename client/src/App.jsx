import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = ({
      page: 'home'
    })
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      page: e.target.name
    })
  }
  render(){
    if (this.state.page === 'home') {
      return (
        <div className="omega_container">
          <div>
            <Navbar handleClick={this.handleClick}/>
          </div>
          <div>
            <Home />
          </div>
        </div>
      )
    } else if (this.state.page === 'about') {
      return (
        <div className="omega_container">
          <div>
            <Navbar handleClick={this.handleClick}/>
          </div>
          <div>
            <About />
          </div>
        </div>
      )
    } else if (this.state.page === 'contact') {
      return (
        <div className="omega_container">
          <div>
            <Navbar handleClick={this.handleClick}/>
          </div>
          <div>
            <Contact/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="omega_container">
          <div>
            <Navbar handleClick={this.handleClick}/>
          </div>
          <div>
            <Projects />
          </div>
        </div>
      )
    }
  }
};
export default App;
