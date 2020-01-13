import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Slides from './slides/Slides';
import '../../App.scss';
import './Hero.scss';

const Hero = () => {
  const [transition, setTransition] = useState(true);
  const [SlideOne, SlideTwo] = Slides;

  useEffect(() => {
    let interval = setInterval(() => {
      setTransition(prevValue => !prevValue);
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="hero">
      <SwitchTransition>
        {transition ? (
          <CSSTransition key={1} in={true} timeout={400} classNames="my-node">
            <SlideOne />
          </CSSTransition>
        ) : (
          <CSSTransition key={2} in={true} timeout={250} classNames="my-node">
            <SlideTwo />
          </CSSTransition>
        )}
      </SwitchTransition>
    </div>
  );
};

export default Hero;
