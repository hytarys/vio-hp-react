import React from "react";
import '../../../html/css/style.css';

const lessonTopImg = require('../../../html/img/lesson-top.jpg')

export const LessonImage: React.FC = () => {
  return (
    <img src={lessonTopImg} alt="" className='p-lesson-top-image' />
  )
}