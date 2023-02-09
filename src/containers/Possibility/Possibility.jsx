import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Come and get inspired by the future we bring to you. To enjoy the possibilities the future brings. Have joy that you can experience the possibilities. The possibilities are beyond your imagination.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
