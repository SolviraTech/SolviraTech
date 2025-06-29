import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Splash.css";

const Splash = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [particlesOptions, setParticlesOptions] = useState({});

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    setParticlesOptions({
      fullScreen: { enable: false },
      background: { color: "#0f2027" },
      fpsLimit:24,
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#ffffff",
          distance: isMobile ? 120 : 150, // shorter lines on mobile
        },
        move: {
          enable: true,
          speed: 2,
        },
        number: {
          value: isMobile ? 30 : 50, // fewer dots on mobile
        },
        size: { value: 2 },
      },
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onFinish) onFinish();
      }}
    >
      {show && (
        <motion.div
          className="splash-container"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1 }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
          />

          <motion.div
            className="splash-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
