import React from "react";
import '../../html/css/style.css'
import LessonStrength from "./LessonStrength";
import LessonCourse from "./LessonCourse";
import LessonContact from "./LessonContact";

const Lesson:React.FC = () => {
  return(
    <main className="u-px_section">
      <LessonStrength />
      <LessonCourse />
      <LessonContact />
    </main>
  )
}

export default Lesson