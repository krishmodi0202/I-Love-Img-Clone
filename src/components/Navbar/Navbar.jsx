import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line, RiArrowDownSLine } from 'react-icons/ri'; 
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="iLoveIMG Logo" />
        </div>
        <div className="navbar__links">
          <a href="#compressimage">Compress Image</a>
          <a href="#resize">Resize</a>
          <a href="#cropimage">Crop Image</a>
          <a href="#converttojpg">Convert To JPG</a>
          <a href="#photoeditor">Photo Editor</a>
          <a href="#moretools">
            More Tools <RiArrowDownSLine />
            <div className="dropdown">
              <a href="#tool1">Tool 1</a>
              <a href="#tool2">Tool 2</a>
              <a href="#tool3">Tool 3</a>
            </div>
          </a>
        </div>
        <div className="navbar__auth">
          <a href="#signin">Sign In</a>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="navbar__toggle">
          {toggleMenu
            ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />}
        </div>
      </div>
      {toggleMenu && (
        <div className="navbar__menu">
          <a href="#compressimage">Compress Image</a>
          <a href="#resize">Resize</a>
          <a href="#cropimage">Crop Image</a>
          <a href="#converttojpg">Convert To JPG</a>
          <a href="#photoeditor">Photo Editor</a>
          <a href="#moretools">More Tools</a>
          <a href="#signin">Sign In</a>
          <button className="signup-button">Sign Up</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
