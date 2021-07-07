import React from "react";
import '../../html/css/style.css';

const ProfileImg:React.FC = () => {

  const profile = require('../../html/img/profile.jpg')
  return(
    <img src={profile} alt="" className="p-profile-image p-profile__image" />
  )
}

export default ProfileImg