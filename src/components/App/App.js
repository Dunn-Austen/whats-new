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
      'genreDisplayed': local
    }
  }

  switchStateGenre(genre) {
    this.setState({
      genreDisplayed: genre
    })
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
        <NewsContainer genreDisplayed={this.state.genreDisplayed}/>
      </main>
    );
  }
}

export default App;
