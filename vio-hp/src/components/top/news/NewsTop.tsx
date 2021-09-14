import React from "react";
import '../../../html/css/style.css'
import NewsArticle from "./NewsArticle";
// import { useRouteData } from "react-static";

const NewsTop: React.FC = () => {
  document.addEventListener("scroll", function(){
    var animation = document.querySelector(".animation")
    var target = animation.getBoundingClientRect().top + window.pageYOffset;
    var scrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    var windowHeight = window.innerHeight;
    var screenHeight = window.parent.screen.height
    if (scrollY  > target - windowHeight + (screenHeight)/2) {
      animation.classList.add("active")
    }
  })
  // const {resp} = useRouteData();
  // console.log(resp)
  return (
    <section className='p-news-top p-news-top__sp animation'>
      <div className='p-news-top-wrap'>
        <div className='p-news-top-wrap__title'>
          <span className='p-news-top-wrap__title_border-bottom u-pb_lg'>NEWS</span>
        </div>
        <div className='p-news-top-wrap__box'>
          <NewsArticle />
        </div>
      </div>
    </section>
  )
}

export default NewsTop