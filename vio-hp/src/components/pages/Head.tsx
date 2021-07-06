import React from "react";
import '../../html/css/style.css'
import ProfileHeadText from "components/pages/HeadText";

const ProfileHead:React.FC = () => {
  return (
    <header className="p-page-header u-flex_jc_center u-flex_aa_center u-flex">
      <div className="p-page-header__title">
        <ProfileHeadText />
      </div>
    </header>
  )
}

export default ProfileHead