import React from 'react'
import '../html/css/style.css'
import Header from './Header'
import Slider from './top/slider/Slider'
// import Profile from './top/profile/ProfileTop'


export default class Layout extends React.Component {
  render(){
    return(
      <main>
        <Header />
        <Slider />
        {/* <Profile /> */}
      </main>
    )
  }
}
