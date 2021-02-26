import React from 'react';

var Navbar = (props) => {

    return (
      <div>
        <ul className="nav">
          <li><button name="home" onClick={props.handleClick} className="btn">Home</button></li>
          <li><button name="about" onClick={props.handleClick} className="btn">About Me</button></li>
          <li><button name="projects" onClick={props.handleClick} className="btn">Projects</button></li>
          <li><button name="contact" onClick={props.handleClick} className="btn">Contact</button></li>
        </ul>
      </div>
    )

};

export default Navbar;