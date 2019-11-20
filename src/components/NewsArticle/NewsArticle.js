import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article className="news-article">
      <h3>{props.headline}</h3>
      <p>{props.img}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
    </article>
  )
};

export default NewsArticle;
