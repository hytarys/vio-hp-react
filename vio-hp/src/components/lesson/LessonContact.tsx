import React from "react";
import '../../html/css/style.css'
import LessonContactButton from "./LessonContactButton";
const LessonContact:React.FC = () => {
  return(
    <section className="p-lesson-contact p-profile__contact u-pt_lg">
      <h2 className="p-profile-contact__title u-text_center">演奏会やお仕事のご依頼はこちらから</h2>
      <LessonContactButton />
    </section>
  )
}

export default LessonContact