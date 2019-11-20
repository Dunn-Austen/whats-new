import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
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
      <main className="app">
        <NewsContainer localNews={this.state.localNews}/>
      </main>
    );
  }
}

export default App;
