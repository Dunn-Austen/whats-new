import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article className="news-article">
      <h3>{props.headline}</h3>
      <img className="news-img" src={props.img} alt={props.headline}/>
      <p>{props.description}</p>
      <a href={props.url}>{props.url}</a>
    </article>
  )
};

export default NewsArticle;
