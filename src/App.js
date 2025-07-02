import React, { useState, lazy, Suspense, useEffect } from 'react';
import Splash from './components/SplashScreen/Splash';
import './App.css';

// Lazy load heavy components
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const HeroBanner = lazy(() => import('./components/Carousel/HeroBanner'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Services = lazy(() => import('./components/Services/Services'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const ContactSupport = lazy(() => import('./components/SupportWidget/ContactSupport'));

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  // Preload components in background
  useEffect(() => {
    if (!splashDone) return;
    
    const preloadComponents = async () => {
      try {
        await Promise.all([
          import('./components/Navbar/Navbar'),
          import('./components/Carousel/HeroBanner'),
          import('./components/Footer/Footer'),
          import('./components/Services/Services'),
          import('./components/AboutUs/AboutUs'),
          import('./components/SupportWidget/ContactSupport')
        ]);
        setContentReady(true);
      } catch (error) {
        console.error("Component preload failed:", error);
        setContentReady(true); // Still show content even if preload fails
      }
    };

    preloadComponents();
  }, [splashDone]);

  return (
    <div className="App">
      {!splashDone ? (
        <Splash onFinish={() => setSplashDone(true)} />
      ) : (
        <Suspense fallback={<div className="loader">Loading...</div>}>
          {contentReady ? (
            <>
              <Navbar />
              <HeroBanner />
              <Services />
              <ContactSupport />
              <AboutUs />
              <Footer />
            </>
          ) : (
            <div className="loader">Loading content...</div>
          )}
        </Suspense>
      )}
    </div>
  );
}

export default App;