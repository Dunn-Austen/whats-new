import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {

  return(
    <section className="search-form">
      <div className="search-container">
        <input className="search-input" placeholder="Keyword"></input>
        <button className="search-btn" onClick={() => props.searchArticlesByKeyword(document.querySelector('.search-input').value)}>Search</button>
      </div>
    </section>
  )
}

export default SearchForm;
