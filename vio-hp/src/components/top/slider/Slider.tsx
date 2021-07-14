import React from 'react'
import '../../../html/css/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import useWindowDimensions from "../../../hooks/useWindowDimensions"

SwiperCore.use([Autoplay, EffectFade]);

const Slider: React.FC = () => {
  const dimensions = useWindowDimensions();
  if (dimensions.width > 969) {
    const slideLogo1 = require('../../../html/img/slider-top1.jpg')
    const slideLogo2 = require('../../../html/img/slider-top2.jpg')
    const slideLogo3 = require('../../../html/img/slider-top3.jpg')
    const slideLogo4 = require('../../../html/img/slider-top4.jpg')
    return<Swiper
    tag="section"
    wrapperTag="ul"
    autoplay={{stopOnLastSlide: true, delay: 1000}}
    effect = "fade"
    speed = {3000}
    allowTouchMove = {false}
    className = 'p-slider-contents'
    id = 'topSlider'
    >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide><img src={slideLogo1} alt=""/></SwiperSlide>
    <SwiperSlide><img src={slideLogo2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={slideLogo3} alt="" /></SwiperSlide>
    <SwiperSlide><img src={slideLogo4} alt="" /></SwiperSlide>
  </Swiper>
  }else{
    const slideLogo1 = require('../../../html/img/slider-top-sp1.jpg');
    const slideLogo2 = require('../../../html/img/slider-top-sp2.jpg');
    const slideLogo3 = require('../../../html/img/slider-top-sp3.jpg');
    return<Swiper
    tag="section"
    wrapperTag="ul"
    autoplay={{stopOnLastSlide: true, delay: 1000}}
    effect = "fade"
    speed = {3000}
    allowTouchMove = {false}
    className = 'p-slider-contents p-slider-contents_sp'
    id = 'topSlider'
    >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide><img src={slideLogo1} alt=""/></SwiperSlide>
    <SwiperSlide><img src={slideLogo2} alt=""/></SwiperSlide>
    <SwiperSlide><img src={slideLogo3} alt=""/></SwiperSlide>
  </Swiper>
  }
}
export default Slider