import React from "react";
import '../../../html/css/style.css'

const newsArticleTopImg = require('../../../html/img/300x500.png')

export const NewsArticle: React.FC = () => {
  return (
    <div className='p-news-top-article p-news-top-article__sp'>
      <div className='p-news-top-article__image'>
        <img src={newsArticleTopImg} alt="" />
      </div>
      <div className='p-news-top-article__text-title'>
        <a className="p-news-top-article__text-title_black" href="#">ここにタイトル</a>
      </div>
      <div className="p-news-top-article__text u-mt_md u-mx_md">
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
      </div>
      <p className="u-text_center"><a className="p-news-top-article__more" href="#">もっと見る</a></p>
    </div>
  )
}