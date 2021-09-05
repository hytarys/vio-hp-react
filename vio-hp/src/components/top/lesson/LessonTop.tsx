import React, { useEffect, useState} from "react";
import '../../../html/css/style.css';
import { LessonImage } from "./LessonImage";
import { LessonText } from "./LessonText";

const scrollAmount = ():number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const LessonTop: React.FC = () => {

    // スクロールが20pxを超えたら発現する処理
    const[isTop, setIsTop] = useState<boolean>(false);

    const onScroll = ():void => {
      let position = scrollAmount();
  
      if(position >= 800 && isTop === false) {
        setIsTop(true);
      }
    }
  
    useEffect(() => {
      document.addEventListener('scroll', onScroll);
      ():void => document.removeEventListener('scroll', onScroll)
    })
  
    const scrollStyle: React.CSSProperties = isTop
    ? {display:'grid'}
    : {display: 'none'}
  
    return (
      <div
      className="p-lesson-container"
      style={scrollStyle}
      >
        <LessonImage />
        <LessonText />
      </div>
    )
}

export default LessonTop