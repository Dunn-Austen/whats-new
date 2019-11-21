import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = (props) => {

  const newsArticles = props.genreDisplayed.map(newsBlock => {
    return (
      <NewsArticle
        headline={newsBlock.headline}
        img={newsBlock.img}
        description={newsBlock.description}
        url={newsBlock.url}
        id={newsBlock.id}
        key={newsBlock.id}
      />
    )
  });

  return (
    <section className='news-container'>
      {newsArticles}
    </section>
  )
};

export default NewsContainer;
