import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>About</h3>
          <p>iLoveIMG is your one-stop tool for all your image editing needs.</p>
        </div>
        <div className="footer__section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#compressimage">Compress Image</a></li>
            <li><a href="#resize">Resize</a></li>
            <li><a href="#cropimage">Crop Image</a></li>
            <li><a href="#converttojpg">Convert To JPG</a></li>
            <li><a href="#photoeditor">Photo Editor</a></li>
            <li><a href="#moretools">More Tools</a></li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Contact</h3>
          <p>Email: support@iloveimg.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="1x" /> {/* Changed size */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="1x" /> {/* Changed size */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="1x" /> {/* Changed size */}
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 iLoveIMG. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
