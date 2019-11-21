import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm';
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

  switchStateGenre = (genre) => {
    this.setState({
      'genreDisplayed': genre
    })
  }

  searchArticlesByKeyword = (searchQuery) => {
    this.state.genreDisplayed.filter(newsStory => {
      return newsStory.headline.toUppercase().includes(searchQuery.toUppercase())
        || newsStory.description.toUppercase().includes(searchQuery.toUppercase())
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
          switchStateGenre={this.switchStateGenre}
          technology={technology}
        />
        <NewsContainer genreDisplayed={this.state.genreDisplayed}/>
        <SearchForm searchArticlesByKeyword={searchArticlesByKeyword}/>
      </main>
    );
  }
}

export default App;
