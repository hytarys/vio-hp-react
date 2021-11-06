import React from "react";
import '../../html/css/style.css'
import { Link } from "@reach/router";

const LessonContactButton:React.FC = () => {
  return (
    <Link to="/contact" className="p-profile-contact__text">
      <div  className="p-profile-contact__button u-text_center u-py_lg ">CONTACT</div>
    </Link>
  )
}

export default LessonContactButton