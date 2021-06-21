import React, {useEffect, useState} from 'react'
import '../../../html/css/style.css'
import {useInView} from 'react-intersection-observer'
import {ProfileText} from './ProfileText'
const ProfileTop: React.FC = () => {

  const [height, changeSliderHeight] = useState(0)

  useEffect(() => {
    changeSliderHeight(document.getElementById('topSlider').clientHeight)
  })


  const {ref, inView} = useInView({
    root: null,
    rootMargin: `${height}px`,
  })
  return(
    <section
    ref={ref}
    className='p-profile'
    >
      {inView && (
        <div>
          <ProfileText />
        </div>
      )
      }
    </section>
  )
}

export default ProfileTop