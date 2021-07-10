import React from "react";
import '../../html/css/style.css'
import LessonCourseContents from "./LessonCourseContents";

const LessonCourse:React.FC = () => {
  return (
    <section className="p-lesson__course">
      <h2 className="u-text_center p-lesson__title-box"><span className="p-lesson__title u-pb_md">COURSE</span></h2>
      <LessonCourseContents />
    </section>
  )
}

export default LessonCourse