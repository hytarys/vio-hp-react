import React from "react";
import '../../../html/css/style.css'
import { client } from "./content";
import { useEffect, useState } from "react";
import  Posts from "./Posts";
import { IArticle } from "./NewsPost";

function NewsArticle(){
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetchData();
  },[]);


  const fetchData =async() => {
    try {
      const resp = await client.getEntries ({content_type: 'post'});
      setArticles(resp.items as any)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <Posts posts={articles}/>
  )
}

export default NewsArticle