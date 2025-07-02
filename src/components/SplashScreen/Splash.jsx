import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Splash.css";

const Splash = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [particlesOptions, setParticlesOptions] = useState({});

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    setParticlesOptions({
      fullScreen: { enable: false },
      background: { color: "#0f2027" },
      fpsLimit: isMobile ? 20 : 30,
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: !isMobile,
          color: "#ffffff",
          distance: isMobile ? 100 : 150,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.5 : 1,
        },
        number: {
          value: isMobile ? 15 : 25,
        },
        size: { value: 2 },
        opacity: { value: 0.5 }
      },
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {show && (
        <motion.div
          className="splash-container"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: "easeInOut" 
            }
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
          />

          <div className="splash-content">
            <div className="splash-lines">────────────</div>
            <motion.h1
              className="splash-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Solvira Tech
            </motion.h1>
            <div className="splash-lines">────────────</div>
            <motion.p
              className="splash-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Smart . Scalable . Solvira
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;