import React from "react";
import '../../html/css/style.css'
import HeadText from "components/pages/HeadText";

const ProfileHead:React.FC = () => {
  return (
    <header className="p-page-header-pc p-page-header-sp p-page-header-sp_pt u-flex_jc_center u-flex_aa_center u-flex">
      <div className="p-page-header-pc__title p-page-header-sp__title">
        <HeadText />
      </div>
    </header>
  )
}

export default ProfileHead