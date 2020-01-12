import React from 'react';
import './Slides.scss';

const SlideOne = () => (
  <div className="slide one">
    <div className="text-box">
      <h2 className="secondary">2020</h2>
      <h1 className="header">SPRING SALE</h1>
      <p className="subtext">
        HOT spring collection, competitive prices, free shipping nationwide!
      </p>
      <button className="slide_btn">View Sale</button>
    </div>
  </div>
);

const SlideTwo = () => (
  <div className="slide two">
    <div className="text-box">
      <h1 className="header">DESIGNER GLASSES</h1>
      <p className="subtext">Latest Designer Brands at affordable prices.</p>
      <button className="slide_btn">View Collection</button>
    </div>
  </div>
);

const Slides = [SlideOne, SlideTwo];
export default Slides;
