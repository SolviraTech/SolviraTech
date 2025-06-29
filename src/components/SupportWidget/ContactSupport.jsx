import React, { useState } from 'react';
// import './ContactSupport.css';
 import './ContactSupport.css';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    countryCode: '+91'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState(null);

  // Initialize EmailJS with your user ID (you can get this from EmailJS dashboard)
  // It's better to put this in a config file or environment variable
  emailjs.init('Ys7_aEUCdR_yQ9kO0');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      const numeric = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numeric.slice(0, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_ihq2rwl',     // Service ID
        'template_0z77wwz',   // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.countryCode + formData.mobile,
          message: formData.message
        },
        'Ys7_aEUCdR_yQ9kO0'

      );

      console.log('Email sent successfully!', response.status, response.text);
      
      setShowThankYou(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
        countryCode: '+91'
      });
    } 
    catch (err) {
  console.error('EmailJS Error Details:', {
    code: err.status,
    text: err.text,
    fullError: err
  });
  setError('Failed to send message. Please try again later.');

    }
  };

  const closeModal = () => {
    const modal = document.querySelector('.thankyou-modal-content');
    if (modal) {
      modal.classList.add('fadeout');
      setTimeout(() => {
        setShowThankYou(false);
      }, 400);
    }
  };

  return (
    <section id = 'contact' className='padding-top'>
      <div className="services-heading">
          {/* <h6 className="sub-heading">What We Do</h6> */}
          <h2 className="main-heading">Contact US</h2>
     </div>
        <div className="contact-support-wrapper">
      <div className="contact-support-left">
        <h2>Solvira Tech Pvt. Ltd.</h2>
        <p>
          Solvira Tech is an India-based IT company developing innovative products to bring smartness and
          efficiency to your business operations.
        </p>
        <p><FaPhoneAlt /> +91 8948313502</p>
        <p><FaEnvelope /> solviratech@gmail.com</p>
        <p><FaMapMarkerAlt /> COMING SOON, INDIA</p>
      </div>

      <div className="contact-support-right">
        <h3>Contact Us</h3>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="form-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group phone-group">
            <div className="country-code-select">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              >
                <option value="+91">+91 (IN)</option>
                <option value="+84">+84 (VN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>
            </div>
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <FaPaperPlane className="sending-icon" /> Sending...
              </>
            ) : "Submit"}
          </button>
        </form>
      </div>

      {showThankYou && (
        <div className="thankyou-modal" onClick={closeModal}>
          <div className="thankyou-modal-content">
            <h2>Thank you!</h2>
            <p>We will get back to you as soon as possible.</p>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default ContactSupport;