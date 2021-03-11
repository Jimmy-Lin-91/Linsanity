import React, { useEffect, useState } from 'react';
import Line from './Line.jsx';
import Script from './Script.js';
class Story extends React.Component {
  constructor(props) {
    super(props),
    this.state= {
      chatBox: ['Connection unstable...', 'Retrying connection....']
    }
    this.addNewLine = this.addNewLine.bind(this);
    this.delayAddingLine = this.delayAddingLine.bind(this);
  }
  addNewLine (input) {
    if (input.length === 0) {
      return 'End of message...';
    }
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
  delayAddingLine (){
    setInterval(() => {
      this.addNewLine(Script);
    }, 3000)
  };
  render() {
    return (
      <div>
        {this.state.chatBox.map((line, i) => {
          return (
            <div>
              <Line line={line} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Story;