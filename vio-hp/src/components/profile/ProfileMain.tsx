import React from "react";
import '../../html/css/style.css'
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";

const ProfileMain: React.FC = () => {
  return(
    <div className="p-profile u-flex u-mt_xxl u-pb_xl">
      <ProfileImg />
      <ProfileText />
    </div>
  )
}

export default ProfileMain