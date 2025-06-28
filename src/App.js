// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Carousel/HeroBanner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactSupport from './components/SupportWidget/ContactSupport';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
	    <Services />
      <ContactSupport/>
      <AboutUs />
	    <Footer/>
    </>
  );
}

export default App;
