import React from 'react'
import '../../../html/css/style.css'
import {useInView} from 'react-intersection-observer'
import {ProfileText} from './ProfileText'

export const Profile: React.FC = () => {
  const sliderHeight = document.getElementById('swiper-container').clientHeight
  const appearancePosition = sliderHeight/2
  const {ref, inView} = useInView({
    rootMargin: `${appearancePosition}px`,
    triggerOnce: true,
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