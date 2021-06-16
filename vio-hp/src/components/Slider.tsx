import React from 'react'
import '../html/css/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade]);

const slideLogo1 = require('../html/img/slider-top1.png')
const slideLogo2 = require('../html/img/slider-top2.png')
const slideLogo3 = require('../html/img/slider-top3.png')

const Slider: React.FC = () => {
  return <Swiper
  tag="section"
  wrapperTag="ul"
  autoplay={{stopOnLastSlide: true, delay: 1000}}
  effect = "fade"
  speed = {3000}
  allowTouchMove = {false}
  className = 'p-slider-contents'
  >
  <SwiperSlide></SwiperSlide>
  <SwiperSlide><img src={slideLogo1} alt=""/></SwiperSlide>
  <SwiperSlide><img src={slideLogo2} alt="" /></SwiperSlide>
  <SwiperSlide><img src={slideLogo3} alt="" /></SwiperSlide>
</Swiper>
}
export default Slider