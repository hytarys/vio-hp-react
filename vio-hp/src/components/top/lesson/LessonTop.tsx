import React, { useEffect, useState} from "react";
import '../../../html/css/style.css';
import { LessonImage } from "./LessonImage";
import { LessonText } from "./LessonText";

const scrollAmount = ():number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const LessonTop: React.FC = () => {

    // スクロールが20pxを超えたら発現する処理
    const[isTop, setIsTop] = useState<boolean>(true);

    const onScroll = ():void => {
      const position = scrollAmount();
      console.log(position);
  
      if(position >= 800) {
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
  
    return (
      <section
      className="p-lesson-top"
      style={scrollStyle}
      >
        <LessonImage />
        <LessonText />
      </section>
    )
}

export default LessonTop