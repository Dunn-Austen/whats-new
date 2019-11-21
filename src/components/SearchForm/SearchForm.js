import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {

  return(
    <section>
      <input className="search-input" placeholder="Keyword"></input>
      <button className="search-btn" onClick={() => props.searchArticlesByKeyword(document.querySelector('.search-input').value)}>Search</button>
    </section>
  )
}

export default SearchForm;
