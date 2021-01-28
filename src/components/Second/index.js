import React, { useContext, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger} from "gsap/all";
import AnimationContext from '../../contexts/animation-context';

export default function Second() {

  let secondRef = useRef(null);
  let textRef = useRef(null);

  let animationContext = useContext(AnimationContext);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current,
        start: "+=200 70%",
        end: "+=200 60%",
        scrub: true,
        markers: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg('#222');
          gsap.to(textRef.current, {
            color: '#ffca28',
            duration: 1
          })
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#fff');
          gsap.to(textRef.current, {
            color: '#000',
            duration: 1
          })
        }
      }
    })
  }, [])

  return (
    <div ref={secondRef} className='h-screen center' style={{borderTop: '1px solid'}} >
      <h1 ref={textRef}>I am Second</h1>
    </div>
  )
}