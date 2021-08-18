import React from "react";
import '../../html/css/style.css'
import LessonStrength from "./LessonStrength";
import LessonCourse from "./LessonCourse";
import LessonContact from "./LessonContact";
import ContactSP from "components/top/contact/ContactSP";

const Lesson:React.FC = () => {
  return(
    <main className="p-lesson_px">
      <LessonStrength />
      <LessonCourse />
      <LessonContact />
      <ContactSP />
    </main>
  )
}

export default Lesson