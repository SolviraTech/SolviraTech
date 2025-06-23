// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Carousel/HeroBanner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
	    <Services />
      <AboutUs />
	    <Footer/>
    </>
  );
}

export default App;
