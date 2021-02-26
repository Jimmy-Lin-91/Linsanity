// import React from 'react';
// import Navbar from './Navbar.jsx';
// import Home from './Home.jsx';
// import Projects from './Projects.jsx';
// import Contact from './Contact.jsx';
// import About from './About.jsx';
// import Loading from './Loading.jsx'

// class App extends React.Component {
//   constructor(props) {
//     super(props),
//     this.state = ({
//       page: 'transmission'
//     })
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e) {
//     this.setState({
//       page: e.target.name
//     }, () => {
//       console.log(e);
//     })
//   }
//   handleTransmission() {

//   }
//   render(){
//     if (this.state.page === 'transmission') {
//       return (
//         <Loading/>
//       )
//     }
//     else if (this.state.page === 'home') {
//       return (
//         <div className="omega_container">
//             <Navbar handleClick={this.handleClick}/>
//             <Home />
//         </div>
//       )
//     } else if (this.state.page === 'about') {
//       return (
//         <div className="omega_container">
//             <Navbar handleClick={this.handleClick}/>
//             <About />
//         </div>
//       )
//     } else if (this.state.page === 'contact') {
//       return (
//         <div className="omega_container">
//             <Navbar handleClick={this.handleClick}/>
//             <Contact/>
//         </div>
//       )
//     } else {
//       return (
//         <div className="omega_container">
//             <Navbar handleClick={this.handleClick}/>
//             <Projects />
//         </div>
//       )
//     }
//   }
// };
// export default App;
