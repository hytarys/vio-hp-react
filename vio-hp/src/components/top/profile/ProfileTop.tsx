import React,{ useEffect, useState} from 'react'
import '../../../html/css/style.css'
import {ProfileText} from './ProfileText'
import { ProfileImage } from './ProfileImage'

const scrollAmount = ():number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const ProfileTop: React.FC = () => {

  // スクロールが20pxを超えたら発現する処理
  const[isTop, setIsTop] = useState<boolean>(true);

  const onScroll = ():void => {
    const position = scrollAmount();

    if(position >= 20) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return ():void => document.removeEventListener('scroll', onScroll)
  })

  const scrollStyle: React.CSSProperties = isTop
  ? {display:'flex'}
  : {display: 'none'}

  return(
    <section
    className='p-profile-top'
    style={scrollStyle}
    >
      <ProfileText />
      <ProfileImage />
    </section>
  )
}

export default ProfileTop