import React from 'react';
import Profile from './Components/Profile.jsx';
import Atmosphere from './Components/Atmosphere.jsx';
import Stats from './Components/Stats.jsx';
import { BsChevronRight } from 'react-icons/bs';
import Accordion from './Components/Accordion.jsx';
class StatusPanel extends React.Component {
  constructor() {
    super(),
    this.state= {
      marsStats: [],
      Profile: false,
      Atmosphere: false,
      Stats: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  render() {
    return (
      <div className="accordion-statusPanel">
        <h4>Status Panel</h4>
          <div>
            <Accordion handleClick={this.handleClick} pane={"Profile"} paneStatus={this.state.Profile}/>
            {this.state.Profile ? <Profile /> : ''}
          </div>
          <div>
            <Accordion handleClick={this.handleClick} pane={"Stats"} paneStatus={this.state.Stats}/>
            {this.state.Stats ? <Stats /> : ''}
          </div>
      </div>
    )
  }
}

export default StatusPanel;