import React from 'react';
import Contact from './Contact.jsx';
import Accordion from './Components/Accordion.jsx';
import Ploober from './Components/Ploober.jsx';
import SystemDesign from './Components/SystemDesign.jsx';
import Commerce from './Components/Commerce.jsx';
class Projects extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      Ploober: false,
      Commerce: false,
      SystemDesign: false
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
      <div className="projects-container">
        <div>
          <Accordion pane={"Ploober"} handleClick={this.handleClick} paneStatus={this.state.Ploober}/>
          {this.state.Ploober ? <Ploober /> : ""}
        </div>
        <div>
          <Accordion pane={"Commerce"} handleClick={this.handleClick} paneStatus={this.state.Commerce}/>
          {this.state.Commerce ? <Commerce /> : ""}
        </div>
        <div>
          <Accordion pane={"SystemDesign"} handleClick={this.handleClick} paneStatus={this.state.SystemDesign}/>
          {this.state.SystemDesign ? <SystemDesign /> : ""}
        </div>
      </div>
    )
  }
};

export default Projects;