import React, { useContext, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
import AnimationContext from '../../contexts/animation-context';

export default function Third() {

  let thirdRef = useRef(null);
  let animationContext = useContext(AnimationContext);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: thirdRef.current,
        start: "+=200 70%",
        end: "+=200 60%",
        scrub: true,
        markers: true,
        pinSpacing: false,
        onEnter: () => {
          console.log('entered');
          animationContext.setCurrentBg('#ffca28');
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#222');
        }
      }
    })
  }, [])
  return (
    <div ref={thirdRef} className='h-screen center' style={{borderTop: '1px solid'}} >
      <h1>I am third </h1>
    </div>
  )
}