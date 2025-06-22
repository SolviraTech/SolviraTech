// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Carousel/HeroBanner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
	  
	  <Footer/>
    </>
  );
}

export default App;
