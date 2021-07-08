import React from "react";
import '../../../html/css/style.css'
import { NewsArticle } from "./NewsArticle";

const NewsTop: React.FC = () => {
  return (
    <section className='p-news-top'
    >
      <div className='p-news-top-wrap'>
        <div className='p-news-top-wrap__title'>
          <span className='p-news-top-wrap__title_border-bottom u-pb_lg'>NEWS</span>
        </div>
        <div className='p-news-top-wrap__box'>
          <NewsArticle />
          <NewsArticle />
          <NewsArticle />
        </div>
      </div>
    </section>
  )
}

export default NewsTop