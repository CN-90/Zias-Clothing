import React from 'react';
import Hero from '../../components/hero/Hero.component';
import './Home.scss';
import Carousel from './../../components/carousel/Carousel.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="container">
        <Carousel title="SPECIAL OFFERS" />
      </div>
    </div>
  );
};

export default Homepage;
