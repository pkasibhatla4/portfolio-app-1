import React, { useEffect, useRef } from 'react';
import './Background.css';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const animate = (event) => {
      // Add your animation logic here
      // Use event.clientX and event.clientY to get the cursor position
    };

    canvas.addEventListener('mousemove', animate);

    return () => {
      canvas.removeEventListener('mousemove', animate);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="background" ref={canvasRef} />;
};

export default Background;