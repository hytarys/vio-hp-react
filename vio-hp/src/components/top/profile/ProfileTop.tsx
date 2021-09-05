import React,{ useEffect, useState} from 'react'
import '../../../html/css/style.css'
import {ProfileText} from './ProfileText'
import { ProfileImage } from './ProfileImage'

const scrollAmount = ():number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const ProfileTop: React.FC = () => {

  // スクロールが20pxを超えたら発現する処理
  const[isTop, setIsTop] = useState<boolean>(false);

  const onScroll = ():void => {
    const position = scrollAmount();

    if(position >= 20 && isTop === false) {
      setIsTop(true);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return ():void => document.removeEventListener('scroll', onScroll)
  },[])

  const scrollStyle: React.CSSProperties = isTop
  ? {display:'grid'}
  : {display: 'none'}

  return(
    <div
    className="p-profile-container"
    style={scrollStyle}
    >
      <ProfileText />
      <ProfileImage />
    </div>
  )
}

export default ProfileTop