import React, { useEffect, useState } from 'react';
import Script from './Script.js';
class Story extends React.Component {
  constructor(props) {
    super(props),
    this.state= {
      chatBox: []
    }
    this.addNewLine = this.addNewLine.bind(this);
    this.delayAddingLine = this.delayAddingLine.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }
  addNewLine (input) {
    for (var i = 0; i < input.length; i++) {
      let currentLine = input[0];
      this.setState({
        chatBox: [...this.state.chatBox, input[0]]
      })
      input = input.shift();
      return input;
    }
  }
  componentDidMount() {
    this.delayAddingLine();
  }
  handleShowModal(e) {
    this.setState({
      show: !this.state.show
    })
  }
  delayAddingLine (){
    let intervalId = setInterval(() => {
      this.addNewLine(Script);
      if (this.state.chatBox.length === 8) {
        clearInterval(intervalId);
      }
    }, 3700)
  };


  render() {
    if (this.state.chatBox.length === 0) {
      return (
        <div className="message-box">
          <p className="message">Decoding message...</p>
        </div>
      )
    } else {
      return (
          <div className="message-box">
            {this.state.chatBox.map((line, i) => {
              return (
                  <div className="message">
                    {line}
                  </div>
              )
            })}
          </div>
      )
    }
  }
}

export default Story;