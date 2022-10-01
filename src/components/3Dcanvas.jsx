import React, { useState, useEffect } from 'react';
import Experience from './Experience/Experience.js'
import '../stylesheet/3Dcanvas.css';

function Canvas() {

  useEffect(() => {
    const experience = new Experience(document.querySelector("canvas.experience-canvas"));
  }, [])
  
  return (
    <div id="experience">
      <canvas className="experience-canvas"></canvas>
    </div>
  );
};

export default Canvas;