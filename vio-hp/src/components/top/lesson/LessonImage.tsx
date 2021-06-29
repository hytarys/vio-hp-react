import React from "react";
import '../../../html/css/style.css';

const lessonTopImg = require('../../../html/img/600x400.png')

export const LessonImage: React.FC = () => {
  return (
    <img src={lessonTopImg} alt="" className='p-lesson-top-image' />
  )
}