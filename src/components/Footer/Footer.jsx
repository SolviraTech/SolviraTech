import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "bottom-right",
        autoClose: 3000,
        style: {
          background: "#1c1c1c",
          color: "#fff",
          border: "1px solid red",
          borderRadius: "8px"
        },
        icon: "⚠️"
      });
      return;
    }

    toast.success("Thanks for subscribing to our newsletter!", {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        background: "#1c1c1c",
        color: "#fff",
        border: "1px solid #8dc63f",
        borderRadius: "8px"
      },
      icon: "✅"
    });

    setEmail('');
  };

  return (
    <>
      <footer className="animated-footer">
        <div className="footer-content">
          <div className="footer-contact">
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div>
                <strong>(+91) 8948313502</strong><br />
                solviratech@gmail.com
              </div>
            </div>
            <div className="contact-item">
              <FaClock className="icon" />
              <div>
                <strong>Mon - Sun</strong><br />
                Available 24x7
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                COMING SOON, INDIA
              </div>
            </div>
          </div>

          <div className="footer-main">
            <div className="about-content">
              <img
                src="/images/transparent_logo.png"
                alt="Solvira Tech"
                className="logo"
              />
              <div className="about-text">
                <p>Solvira Tech Pvt. Ltd. is an India-based IT company developing innovative products to bring smartness and efficiency to your business operations.</p>
                <div className="social">
                  <a href="#FB"><FaFacebookF className="social-icon" /></a>
                  <a href="#IG"><FaInstagram className="social-icon" /></a>
                  <a href="#LinkedIN"><FaLinkedinIn className="social-icon" /></a>
                  <a href="#Twitter">
                    <span className="social-icon x-icon">
                      <i className="fa-brands fa-x-twitter"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2 animated footer cards */}
            <div className="footer-cards">
              <div className="footer-card newsletter-card">
                <h4>Subscribe to our Newsletter</h4>
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>

              <div className="footer-card posts-card">
                <h4>Latest Posts</h4>
                <ul>
                  <li>
                    <a href="#post1">How Solvira Empowers Businesses with AI</a>
                    <span>May 18, 2025</span>
                  </li>
                  <li>
                    <a href="#post2">Upcoming: Blockchain Project Launch</a>
                    <span>June 5, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {currentYear} | Solvira Tech Pvt. Ltd. | All rights reserved
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <ToastContainer />
    </>
  );
};

export default Footer;
