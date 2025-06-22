// src/components/HeroBanner.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={3000}
      >
        <div><img src="/images/img1.jpg" alt="Slide 1" /></div>
        <div><img src="/images/img2.jpg" alt="Slide 2" /></div>
        <div><img src="/images/img3.jpg" alt="Slide 3" /></div>
        <div><img src="/images/img4.jpg" alt="Slide 4" /></div>
        <div><img src="/images/img5.jpg" alt="Slide 5" /></div>
      </Carousel>

      <div className="hero-overlay">
        <h1>Welcome to Solvira Tech Solutions</h1>
        <p>Your Trusted IT Partner</p>
        <div className="buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
