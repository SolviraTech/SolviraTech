import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <>
      {/* Contact Bar (Green Box) */}
      <motion.div
        className="footer-contact"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="footer-contact-item">
          <FaPhoneAlt className="footer-icon" />
          <div>
            <strong>(+91) 8948313502</strong><br />
            solviratech@gmail.com<br />
          </div>
        </div>

        <div className="footer-contact-item">
          <FaClock className="footer-icon" />
          <div>
            <strong>Mon - Sun</strong><br />
            Available 24x7
          </div>
        </div>

        <div className="footer-contact-item">
          <FaMapMarkerAlt className="footer-icon" />
          <div>
            <strong>COMING SOON ....,<br />COMING SOON ....<br />INDIA</strong>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="footer-main">
          <motion.div
            className="footer-about"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="footer-logo">
              <img src="https://www.ssjitsolutions.com/assets/images/logo.png" alt="Solvira Tech" />
            </div>
            <p>
              Solvira Tech Pvt. Ltd. is an India-based IT company engaged in developing out-of-box products that aim to bring smartness to the usual way of running business operations.
            </p>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4>Useful <span>Links</span></h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-posts"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4>Recent <span>Posts</span></h4>
            <div className="post">
              <img src="https://img.icons8.com/ios-filled/50/bitcoin.png" alt="Blockchain" />
              <div>
                <a href="#">COMNG SOON...</a>
                <p>May 12, 2025</p>
              </div>
            </div>
            <div className="post">
              <img src="https://img.icons8.com/ios-filled/50/artificial-intelligence.png" alt="Artificial Intelligence" />
              <div>
                <a href="#">COMING SOON...</a>
                <p>April 14, 2025</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Copyright © 2025 | SOLVIRA TECH SOLUTIONS PRIVATE LIMITED | All rights reserved</p>
        </motion.div>

        <ScrollToTop />
      </motion.footer>

    </>
  );
};

export default Footer;
