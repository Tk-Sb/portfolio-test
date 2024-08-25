'use client'

import { useEffect, useRef } from 'react';  
import { Rive } from '@rive-app/canvas';  

const RiveAnimation = ({ animationName }) => {  
  const canvasRef = useRef(null);  
  const riveRef = useRef(null);  

  useEffect(() => {  
    if (canvasRef.current) {  
      const rive = new Rive({  
        src: '@/rive/UI-UX.riv', // Replace with the path to your Rive file  
        canvas: canvasRef.current,  
        autoplay: false, // Avoid autoplay to trigger it manually  
        onLoad: () => {  
          riveRef.current = rive;  
        }  
      });  

      return () => {  
        rive.cleanup();   
      };  
    }  
  }, [canvasRef]);  

  const playAnimation = () => {  
    if (riveRef.current) {  
      riveRef.current.play(animationName); // Trigger the specific animation  
    }  
  };  

  return (  
    <div>  
      <canvas ref={canvasRef} />  
      <button onClick={playAnimation}>Play Animation</button> {/* Trigger on button click */}  
    </div>  
  );  
};  

export default RiveAnimation;