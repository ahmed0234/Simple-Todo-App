"use client"

import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';



export default function LottieAnimation() {
    const animationContainer = useRef(null);
  
    useEffect(() => {
        console.log(`running how many times?`)
      const options = {
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/Running.json'
      };
      const hasRendered = Boolean(animationContainer.current?.firstChild);
      if (!hasRendered) {
        lottie.loadAnimation(options);
      }
    }, []); // Empty array means this effect runs only once after the initial render
  
    return (
      <div ref={animationContainer} className='h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:w-[550px] lg:h-[550px] 2xl:h-[650px] 2xl:w-[650px]'></div>
    );
  }