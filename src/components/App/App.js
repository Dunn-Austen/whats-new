import React, { Component } from 'react';
import Menu from '../Menu/Menu';
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
        <Menu
          entertainment={entertainment}
          health={health}
          local={local}
          science={science}
          technology={technology}
        />
        <NewsContainer localNews={this.state.localNews}/>
      </main>
    );
  }
}

export default App;
