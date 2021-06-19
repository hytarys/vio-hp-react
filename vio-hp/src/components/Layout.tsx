import React from 'react'
import '../html/css/style.css'
import Header from 'src'
import Slider from './Slider'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Slider />
      </div>
    )
  }
}
