import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = (props) => {

  const newsArticles = props.localNews.map(newsBlock => {
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
    <div className='news-container'>
      {newsArticles}
    </div>
  )
};

export default NewsContainer;
