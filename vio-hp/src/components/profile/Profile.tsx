import React from "react";
import '../../html/css/style.css';
import ProfileMain from "./ProfileMain";
import ProfileContact from "./ProfileContact";
import ContactSP from "components/top/contact/ContactSP";

const Profile: React.FC = () => {
  return(
    <div className="p-profile p-profile-sp_px u-mt_xxl">
      <ProfileMain />
      <ProfileContact />
      <ContactSP />
    </div>
  )
}

export default Profile