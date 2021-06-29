import React from "react";
import '../../../html/css/style.css'

const newsArticleTopImg = require('../../../html/img/300x500.png')

export const NewsArticle: React.FC = () => {
  return (
    <div className='p-news-top-article'
    >
      <div className='p-news-top-article__image'>
        <img src={newsArticleTopImg} alt="" />
      </div>
      <div className='p-news-top-article__text'>
        <a>ここにテキスト</a>
      </div>
    </div>
  )
}