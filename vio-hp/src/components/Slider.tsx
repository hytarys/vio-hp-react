import React from 'react'
import '../html/css/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade]);

const slideLogo1 = require('../html/img/IMG_4397.jpg')
const slideLogo2 = require('../html/img/IMG_4440.jpg')
const slideLogo3 = require('../html/img/IMG_4452.jpg')
const slideLogo4 = require('../html/img/IMG_4465.jpg')

const Slider: React.FC = () => {
  return <Swiper
  tag="section"
  wrapperTag="ul"
  autoplay={{delay: 10000}}
  onInit={(swiper :string) => console.log('Swiper initialized!', swiper)}
  onReachEnd={() => console.log('Swiper end reached')}
  loop={true}
  effect = "fade"
  speed = {2000}
  >
  <SwiperSlide><img src={slideLogo1} alt=""/></SwiperSlide>
  <SwiperSlide><img src={slideLogo2} alt="" /></SwiperSlide>
  <SwiperSlide><img src={slideLogo3} alt="" /></SwiperSlide>
  <SwiperSlide><img src={slideLogo4} alt="" /></SwiperSlide>
</Swiper>
}
export default Slider