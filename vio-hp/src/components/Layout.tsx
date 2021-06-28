import React from 'react'
import '../html/css/style.css'
import Header from './Header'
import Slider from './top/slider/Slider'
import ProfileTop from './top/profile/ProfileTop'

const Layout: React.FC=() => {
    return(
      <main>
        <Header />
        <Slider />
        <ProfileTop />
      </main>
    )
}

export default Layout