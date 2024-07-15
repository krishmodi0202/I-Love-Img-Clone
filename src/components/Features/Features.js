import React from 'react';
import './Features.css';
import edit from './edit.png';
import crop from './crop.png';
import convert from './convert.png';
import bg from './bg.png';
import meme from './meme.png';
import up from './upscale.png';

const Features = () => {
  return (
    <div>
    <h4></h4>
            <div className="flip">
                <div className="front" style={{ backgroundImage: `url(${edit})`}}>
                    <h1 className="text-shadow">EDIT IMAGE</h1>
                </div>
                <div className="back">
                    <h2 className='hoad'>EDIT</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                </div>
            </div>
            <div className="flip">
                <div className="front" style={{ backgroundImage: `url(${crop})`}}>
                    <h1 className="text-shadow">CROP</h1>
                </div>
                <div className="back">

                    <h2>Crop</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                </div>
            </div>
            <div className="flip">
                <div className="front" style={{ backgroundImage: `url(${convert})` }}>
                    <h1 className="text-shadow">Convert</h1>
                </div>
                <div className="back">
                    <h2>Convert</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                </div>
            </div>

            <br />
            <br />

            
            <div className="flip flip-vertical">
                <div className="front" style={{ backgroundImage: `url(${bg})` }}>
                    <h1 className="text-shadow">REMOVE BACKGROUND</h1>
                </div>
                <div className="back">
                    <h2></h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                </div>
            </div>
            <div className="flip flip-vertical">
                <div className="front" style={{ backgroundImage: `url(${meme})` }}>
                    <h1 className="text-shadow">MEME GENEREATOR</h1>
                </div>
                <div className="back">
                  
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                </div>
            </div>
            <div className="flip flip-vertical">
                <div className="front" style={{ backgroundImage: `url(${up})` }}>
                    <h1 className="text-shadow">UPSCALE IMAGE</h1>
                </div>
                <div className="back">
                    <h2></h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                </div>
            </div>
    
              
                
           
               
 
      
    </div>
  );
}

export default Features;
