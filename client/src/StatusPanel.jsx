import React from 'react';
import Profile from './Components/Profile.jsx';
import Atmosphere from './Components/Atmosphere.jsx';
import Photos from './Components/Photos.jsx';
import { FaChevronRight } from 'react-icons/fa';

class StatusPanel extends React.Component {
  constructor() {
    super(),
    this.state= {
      marsPhotos: [],
      profile: false,
      atmosphere: false,
      photos: false,
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
        <div className="accordion-item">
            <button className="accordion-button" name="profile" onClick={this.handleClick}>
              Profile
              <FaChevronRight className="chevron-right"/>
            </button>
            {this.state.profile ? <Profile /> : ""}
        </div>
        <div className="accordion-item">
            <button className="accordion-button" name="photos" onClick={this.handleClick}>
              Photos
              <FaChevronRight className="chevron-right"/>
            </button>
            {this.state.photos ? <Photos /> : ""}
        </div>
      </div>
    )
  }
}

export default StatusPanel;