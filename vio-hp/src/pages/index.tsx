import React from "react";
import '../html/css/style.css';
import Slider from "components/top/slider/Slider";
import ProfileTop from "components/top/profile/ProfileTop";
import LessonTop from "components/top/lesson/LessonTop";
import NewsTop from "components/top/news/NewsTop";
import ContactTop from "components/top/contact/ContactTop";


function Home () {
  return (
    <>
    <Slider />
    <section className="p-grid">
      <ProfileTop />
      <LessonTop />
    </section>
    <NewsTop />
    <ContactTop />
  </>
  )
}

export default Home;

