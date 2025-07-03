'use client';
import React, { useRef, useEffect } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      import('../utils/fluid').then(({ initFluid }) => {
        initFluid(canvasRef.current);
      });
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ display: 'block' }} 
    />
  );
};

export default FluidBackground;
