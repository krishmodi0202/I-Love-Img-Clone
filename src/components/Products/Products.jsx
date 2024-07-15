import React from 'react';
import './Products.css'; // Make sure to import your CSS file
import compress from './compress.png';
import word from './word.png';
import ppt from './ppt.png';
import ppt2 from './ppt2.png';
import excel2 from './excel2.png';
import edit from './edit.png';
import repair from './repair.webp';
import sign from './sign.png';

const ProductCard = () => (
  <div className="product-cards-container" id="products">
    <div className="product-card">
      <div className="product-tumb">
        <img src={compress} alt="Compress IMG" />
      </div>
      <div className="product-details">
        <h4><a href="#">Compress IMG</a></h4>
        <p>Compress IMG to a smaller size</p>
        <div className="product-bottom-details">
          <button>Compress Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={word} alt="Resize" />
      </div>
      <div className="product-details">
        <h4><a href="#">Resize</a></h4>
        <p>Change dimensions</p>
        <div className="product-bottom-details">
          <button>Convert Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={ppt} alt="IMG to PPT" />
      </div>
      <div className="product-details">
        <h4><a href="#">Crop Image</a></h4>
        <p>Crop Image into JPG, PNG</p>
        <div className="product-bottom-details">
          <button>Convert Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={ppt2} alt="PPT to IMG" />
      </div>
      <div className="product-details">
        <h4><a href="#">Convert to JPG</a></h4>
        <p>Convert this IMG to JPG</p>
        <div className="product-bottom-details">
          <button>Convert Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={excel2} alt="Excel to IMG" />
      </div>
      <div className="product-details">
        <h4><a href="#">Photo Editor</a></h4>
        <p>Decor your photo</p>
        <div className="product-bottom-details">
          <button>Convert Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={edit} alt="Excel to IMG" />
      </div>
      <div className="product-details">
        <h4><a href="#">Upscale Image</a></h4>
        <p>Enlarge Your resolution</p>
        <div className="product-bottom-details">
          <button>Edit Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={repair} alt="Excel to IMG" />
      </div>
      <div className="product-details">
        <h4><a href="#">Remove Background</a></h4>
        <p>Remove dirty Background</p>
        <div className="product-bottom-details">
          <button>Edit Now!</button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-tumb">
        <img src={sign} alt="Excel to IMG" />
      </div>
      <div className="product-details">
        <h4><a href="#">Watermark Image</a></h4>
        <p>Put your digital Signature</p>
        <div className="product-bottom-details">
          <button>Sign Now!</button>
        </div>
      </div>
    </div>

    {/* Additional Product Card */}
    <div className="product-card">
      <div className="product-tumb">
        <img src={compress} alt="New Product" />
      </div>
      <div className="product-details">
        <h4><a href="#">New Product Name</a></h4>
        <p>Description of the new product</p>
        <div className="product-bottom-details">
          <button>Explore Now!</button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
