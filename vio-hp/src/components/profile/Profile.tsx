import React from "react";
import '../../html/css/style.css';
import ProfileMain from "./ProfileMain";
import ProfileContact from "./ProfileContact";

const Profile: React.FC = () => {
  return(
    <div className="p-profile u-mt_xxl">
      <ProfileMain />
      <ProfileContact />
    </div>
  )
}

export default Profile