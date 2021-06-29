import React from 'react'
import '../html/css/style.css'
import Header from './Header'
import Slider from './top/slider/Slider'
import ProfileTop from './top/profile/ProfileTop'
import LessonTop from './top/lesson/LessonTop'

const Layout: React.FC=() => {
    return(
      <main>
        <Header />
        <Slider />
        <ProfileTop />
        <LessonTop />
      </main>
    )
}

export default Layout