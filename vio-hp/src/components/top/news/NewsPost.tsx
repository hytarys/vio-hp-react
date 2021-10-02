import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "@reach/router";


export interface IArticle {
  article: {
      fields: {
        bodytext: string,
        thumbnail: IImage,
        title: string,
        date: string
    }
  }
};

interface IImage {
  fields: {
      file: {
          url: string;
      }
  }
};

function NewsPost ({article} : any) {
  const fields = article.fields
  const body = article.fields.bodytext
  const text = documentToReactComponents(body);
  return (
    <div>
      <div className='p-news-top-article__image'>
        <img src={fields.thumbnail.fields.file.url} alt="" />
      </div>
      <div className='p-news-top-article__text-title u-text_center'>
          <a className="p-news-top-article__text-title_black" href="#">{fields.title}</a>
      </div>
      <div className="u-text_center">{text}</div>
    </div>
  )
}

export default NewsPost;