import React from 'react';
import Status from './Status.jsx';
import Atmosphere from './Atmosphere.jsx';
import Photos from './Photos.jsx';
class StatusPanel extends React.Component {
  constructor() {
    super(),
    this.state= {
      photos: [],
      status: false,
      atmpshere: false,
      photos: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="accordion-statusPanel">
        <h4>Status Panel</h4>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne"><button className="accordion-button" name="status">Explorer Profile</button></h2>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              <Status />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne"><button className="accordion-button">Current Atmosphere</button></h2>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              <Atmosphere />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne"><button className="accordion-button">Photos</button></h2>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              <Photos />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default StatusPanel;