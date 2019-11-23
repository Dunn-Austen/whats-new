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

//Fetch psuedoCode
  // componentDidMount() {
  // fetch('https://whats-new-api.herokuapp.com/api/v1/news')
  //   .then(response => response.json())
  //   .then(data => {
  //     entertainment = data.entertainment;
  //     health = data.health;
  //     local = data.local;
  //     science = data.science;
  //     technology = data.technology;
  //     this.setState({'genreDisplayed': local})
  //   })
  // }

  switchStateGenre = (genre) => {
    this.setState({
      'genreDisplayed': genre
    })
  }

  searchArticlesByKeyword = (searchQuery) => {
    const matchingArticles = this.state.genreDisplayed.filter(newsStory => {
      return newsStory.headline.toUpperCase().includes(searchQuery.toUpperCase())
        || newsStory.description.toUpperCase().includes(searchQuery.toUpperCase())
    })

    if (matchingArticles.length > 0) {
      this.setState({
        'genreDisplayed': matchingArticles
      })

    } else {
      this.setState({
        'genreDisplayed': [{
            id: null,
            headline: 'No matching results',
            img: 'https://store.hallsigns.com/assets/images/W14-1.png',
            description: 'Please search using a different keyword',
            url: null
          }]
      })
    }
  }

  render () {
    return (
      <section className="app">
        <Menu
          entertainment={entertainment}
          health={health}
          local={local}
          science={science}
          switchStateGenre={this.switchStateGenre}
          technology={technology}
        />
        <NewsContainer genreDisplayed={this.state.genreDisplayed}/>
        <SearchForm searchArticlesByKeyword={this.searchArticlesByKeyword}/>
      </section>
    );
  }
}

export default App;
