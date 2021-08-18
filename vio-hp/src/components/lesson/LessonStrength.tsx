import React from "react";
import '../../html/css/style.css'

const LessonStrength:React.FC = () => {

  const lessonImg = require('../../html/img/560x400.png')

  return (
    <section className="p-lesson-strength p-lesson-strength_pt">
      <h2 className="u-text_center p-lesson-strength__title-box">
        <span className="p-lesson__title u-pb_md">STRENGTH</span>
      </h2>
      <div>
        <div className="u-flex p-lesson-strength__point-sp">
          <h3 className="u-text_center p-lesson-strength-sp">
              <span className="p-lesson-strength-text__title u-pb_md">POINT1：常に全力</span>
          </h3>
          <div className="p-lesson-strength__img">
            <img className="p-lesson-strength_img-w" src={lessonImg} alt="" />
          </div>
          <div className="p-lesson-strength__text p-lesson-strength-text">
            <h3 className="u-text_center p-lesson-strength-pc">
              <span className="p-lesson-strength-text__title u-pb_md">POINT1：常に全力</span>
            </h3>
            <p className="u-pt_xl p-lesson-strength-text__main">
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
            </p>
          </div>
        </div>
        <div className="u-flex p-lesson-strength-contents p-lesson-strength__point-sp">
          <h3 className="u-text_center">
              <span className="p-lesson-strength-text__title-sp u-pb_md">POINT2：どこよりも安く</span>
          </h3>
          <div className="p-lesson-strength__text_right p-lesson-strength-text">
            <h3 className="u-text_center">
              <span className="p-lesson-strength-text__title-pc u-pb_md">POINT2：どこよりも安く</span>
            </h3>
            <p className="u-pt_xl p-lesson-strength-text__main">
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
            </p>
          </div>
          <div className="p-lesson-strength_img-right">
            <img className="p-lesson-strength_img-w" src={lessonImg} alt="" />
          </div>
        </div>
        <div className="u-flex p-lesson-strength__point-sp p-lesson-strength_mt">
          <h3 className="u-text_center p-lesson-strength-sp">
              <span className="p-lesson-strength-text__title u-pb_md">POINT3：お触り厳禁</span>
          </h3>
          <div className="p-lesson-strength__img">
            <img className="p-lesson-strength_img-w" src={lessonImg} alt="" />
          </div>
          <div className="p-lesson-strength__text p-lesson-strength-text">
            <h3 className="u-text_center p-lesson-strength-pc">
              <span className="p-lesson-strength-text__title u-pb_md">POINT3：お触り厳禁</span>
            </h3>
            <p className="u-pt_xl p-lesson-strength-text__main">
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
              ここにテキスト。ここにテキスト。ここにテキスト。ここにテキスト。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LessonStrength