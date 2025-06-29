// src/components/HeroBanner.jsx
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroBanner.css';

const HeroBanner = () => {
  //  const navigate = useNavigate(); 

const handleContactClick = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <section id='home'>
    <div className="hero-banner-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={3000}
      >
        <div><img src="/images/service_01.jpeg" alt="Slide 1" /></div>
        <div><img src="/images/service_02.jpeg" alt="Slide 2" /></div>
        <div><img src="/images/service_03.jpeg" alt="Slide 3" /></div>
        <div><img src="/images/service_04.jpeg" alt="Slide 4" /></div>
        <div><img src="/images/service_05.jpeg" alt="Slide 5" /></div>
      </Carousel>

      <div className="hero-overlay">
        <h1>Welcome to Solvira Tech Solutions</h1>
        <p>Your Trusted IT Partner</p>
        <div className="buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>
    </div>
    </section>
  );

};

export default HeroBanner;
