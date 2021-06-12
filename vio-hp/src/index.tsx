import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import Header from './components/Header'
import Slider from './components/Slider'

// Export your component as JSX (for static rendering)
export default Header

const header_target = document.getElementById('l-header')
const slider_target = document.getElementById('p-slider')


ReactDOM.render(
  <Header />,
  header_target
)

ReactDOM.render(
  <Slider />,
  slider_target
)