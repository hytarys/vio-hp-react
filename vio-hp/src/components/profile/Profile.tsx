import React from "react";
import '../../html/css/style.css';
import ProfileMain from "./ProfileMain";

const Profile: React.FC = () => {
  return(
    <div className="p-profile u-flex u-mt_xxl u-padding_bottom_xl">
      <ProfileMain />
    </div>
  )
}

export default Profile