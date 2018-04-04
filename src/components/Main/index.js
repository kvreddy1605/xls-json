import React, { Component } from 'react';
import './index.scss';
import XlsToJson from '../XlsToJson';

class MainComponent extends Component {
  constructor(props){
    super(props);
    this.onJSONOutput = this.onJSONOutput.bind(this);
  }

  onJSONOutput(JSONData){
    console.log(JSONData);
  }

  render() {
    return (
      <div>
        <XlsToJson onJSONOutput={this.onJSONOutput} />
      </div>
    );
  }
}

export default MainComponent;
