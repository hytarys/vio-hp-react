import React from 'react'
import '../html/css/style.css'
import Header from './Header'
import Slider from './top/slider/Slider'
import ProfileTop from './top/profile/ProfileTop'
import LessonTop from './top/lesson/LessonTop'
import NewsTop from './top/news/NewsTop'

const Layout: React.FC=() => {
    return(
      <main>
        <Header />
        <Slider />
        <ProfileTop />
        <LessonTop />
        <NewsTop />
      </main>
    )
}

export default Layout