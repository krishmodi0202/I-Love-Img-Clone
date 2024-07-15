import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div id="Pricing">
      <div className="wrapper">
        <div className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">Basic</h4>
          </div>
          <div className="content">
            <ul>
              <li>Access to basic tools</li>
              <li>Basic support</li>
              <li>Limited features</li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">Buy Premium</a>
            </div>
          </div>
        </div>

        <div className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">Standard</h4>
          </div>
          <div className="content">
            <ul>
              <li>Access to all tools</li>
              <li>Priority support</li>
              <li>Additional features</li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">Buy Premium</a>
            </div>
          </div>
        </div>

        <div className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">Premium</h4>
          </div>
          <div className="content">
            <ul>
              <li>All features unlocked</li>
              <li>24/7 support</li>
              <li>Exclusive benefits</li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">Buy Premium</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
