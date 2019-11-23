import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {

  return(
    <section className="search-form">
      <h4 className="search-text">Search Articles by Keyword:</h4>
      <div className="search-container">
        <input className="search-input" placeholder="Keyword"></input>
        <button className="search-btn" onClick={() => props.searchArticlesByKeyword(document.querySelector('.search-input').value)}>Search</button>
      </div>
    </section>
  )
}

export default SearchForm;
