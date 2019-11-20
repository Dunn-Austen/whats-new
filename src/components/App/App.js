import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'localNews': local
    }
  }

  render () {
    return (
      <div className="app">
        <h1>'Placeholder Text'</h1>
      </div>
    );
  }
}

export default App;
