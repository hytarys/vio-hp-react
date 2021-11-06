import React from "react";
import { IArticle } from "./NewsPost";
import  NewsPost from "./NewsPost";

export interface IPosts {
  posts: IArticle[]
}

function Posts ({posts} : IPosts) {
  return (
    <>
      {posts.map((article: any, index: number) =>
      <>
        <div className='p-news-top-article p-news-top-article__sp u-margin_center'>
          <NewsPost 
            article={article}
            key={index}
          />
          <p className="u-text_center"><a className="p-news-top-article__more" href="#">もっと見る</a></p>
        </div>
      </>
      )}
    </>
  )
}

export default Posts;