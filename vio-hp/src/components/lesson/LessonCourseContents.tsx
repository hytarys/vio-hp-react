import React from "react";
import "../../html/css/style.css"

const LessonCourseContents: React.FC = () => {

  const lessonCourseImg = require("../../html/img/560x400.png");

  return (
    <div className="u-flex u-flex_jc_sb">
      <div className="p-lesson-course">
        <h3 className="u-text_center  u-mb_xl">
          <span className="p-lesson-strength-text__title u-pb_md">コース1</span>
        </h3>
        <div><img className="p-lesson-course__img" src={lessonCourseImg} alt="" /></div>
        <div className="u-mt_lg">
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        </div>
      </div>
      <div className="p-lesson-course">
        <h3 className="u-text_center  u-mb_xl">
          <span className="p-lesson-strength-text__title u-pb_md">コース1</span>
        </h3>
        <div><img className="p-lesson-course__img" src={lessonCourseImg} alt="" /></div>
        <div className="u-mt_lg">
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        </div>
      </div>
      <div className="p-lesson-course">
        <h3 className="u-text_center  u-mb_xl">
          <span className="p-lesson-strength-text__title u-pb_md">コース1</span>
        </h3>
        <div><img className="p-lesson-course__img" src={lessonCourseImg} alt="" /></div>
        <div className="u-mt_lg">
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
        </div>
      </div>
    </div>
  )
}

export default LessonCourseContents