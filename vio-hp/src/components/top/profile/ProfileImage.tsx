import React from "react";
import '../../../html/css/style.css'

const profileTopImg = require('../../../html/img/600x400.png')

export const ProfileImage: React.FC = () => {
  return (
    <img src={profileTopImg} alt="" className='p-profile-top-image' />
  )
}