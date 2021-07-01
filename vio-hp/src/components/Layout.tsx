import React from 'react'
import '../html/css/style.css'
import Header from './Header'
import Slider from './top/slider/Slider'
import ProfileTop from './top/profile/ProfileTop'
import LessonTop from './top/lesson/LessonTop'
import NewsTop from './top/news/NewsTop'
import ContactTop from './top/contact/ContactTop'
import Footer from './Footer'

const Layout: React.FC=() => {
    return(
      <main>
        <Header />
        <Slider />
        <ProfileTop />
        <LessonTop />
        <NewsTop />
        <ContactTop />
        <Footer />
      </main>
    )
}

export default Layout