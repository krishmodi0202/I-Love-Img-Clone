import React from 'react';
import './Landing.css';
import pdfimg from './landing img.png'

const Landing = () => {
  return (
    <div id="home">
    <div className="land">
    <p className='p1'>"Streamline Document</p>
    <p className='p2'>Tasks"</p>
    <img src={pdfimg} className='landimg'></img>
    <div className="tagline">
      <p>Get your Image handled easily</p>
    </div>
    </div>
    </div>
  );
}

export default Landing;

