// import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Carousel/HeroBanner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactSupport from './components/SupportWidget/ContactSupport';
// import Splash from './components/SplashScreen/Splash';

function App() {
  // const [splashDone, setSplashDone] = useState(false);

  return (
    // <>
    //   <Splash onFinish={() => setSplashDone(true)} />
    //   {!splashDone && null}
    //   {splashDone && (
        <>
          <Navbar />
          <HeroBanner />
          <Services />
          
          <AboutUs />
          <ContactSupport />
          <Footer />
        </>
    //   )}
    // </>
  );
}
export default App;