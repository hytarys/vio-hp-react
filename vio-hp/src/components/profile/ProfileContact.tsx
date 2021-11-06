import React from "react";
import '../../html/css/style.css'
import ProfileContactButton from "./ProfileContactButton";

const ProfileContact:React.FC = () => {
  return(
    <section className="p-profile-contact p-profile__contact u-pt_lg">
      <h2 className="p-profile-contact__title u-text_center">演奏会やお仕事のご依頼はこちらから</h2>
      <ProfileContactButton />
    </section>
  )
}

export default ProfileContact