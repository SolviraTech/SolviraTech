import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section id="about" className="about-image">
      {/* Heading Section */}
<div className="about-heading-wrapper">
  <div className="about-heading">
    <h4 className="about-sub-heading">Who We Are</h4>
    <h2 className="about-main-heading">ABOUT US</h2>
  </div>
</div>

<div className="about-section">
  <div className="about-image-left">
    <img
      src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Team discussion"
    />
  </div>
  <div className="about-content">
    <h2>
      We Innovate & <span className="highlight">Design</span>
    </h2>
    <p>
      Solvira Tech is a newly established India-based IT company, founded with a vision to deliver innovative, performance-driven, and cost-effective digital solutions. We specialize in crafting smart websites, scalable applications, creative graphic designs, and impactful digital marketing strategies to help businesses modernize their operations.

    <p>Our mission is to empower clients with tailored IT services that enhance efficiency and provide a competitive edge. With a commitment to quality, agility, and customer satisfaction, Solvira Tech is here to bring fresh ideas and reliable technology to support the evolving needs of businesses—no matter their size or industry.
    </p>

    </p>
    <ul>
      <li>🌱 A passionate team driven by innovation, technical expertise, and logical thinking to deliver smart solutions.</li>
      <li>🌱 Committed to customer satisfaction through timely delivery of high-quality, value-driven services.</li>
      <li>🌱 Though newly established, our core team brings over 3 years of industry experience, enabling us to understand client needs with clarity and precision.</li>
    </ul>
  </div>
</div>
      {/* Middle Section */}
<div className="about-quality-wrapper">
  <h2 className="about-quality-title">Quality Comes First</h2>
  <p className="about-quality-subtitle">
    We ensure that you get the highest quality in each and every one of our solutions customized to match
    with your business expectations and requirements.
  </p>
  <div className="about-quality-inner">
    <div className="quality-img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1000&q=80"
        alt="quality discussion"
      />
    </div>
<div className="quality-content-card">
  <div className="quality-box">
    <div className="quality-number">1</div>
    <div className="quality-text">
      <p>Our Capabilities</p>
      <p>
        With our strong and unparalleled tech-skills and experience packed with inventive ideas and creativity, we offer the best Omni-solutions that make us the preferred choice amongst our customers.
      </p>
    </div>
  </div>
  <div className="quality-box">
    <div className="quality-number">2</div>
    <div className="quality-text">
      <p>We are Best at</p>
      <p>
        Our team believes in providing the best and innovative solutions for your business needs and requirements keeping in mind the limits while exploring, innovating, and creating.
      </p>
    </div>
  </div>
  <div className="quality-box">
    <div className="quality-number">3</div>
    <div className="quality-text">
      <p>How We Accomplish</p>
      <p>
        We transform your idea into reality, add our intellectuality, creativity & deliver the brilliant products and other solutions on time to prevent any last minute hustle.
      </p>
    </div>
  </div>
</div>
  </div>
</div>

      {/* Bottom Section */}
      <div className="about-what-we-do">
  <h2>What We <span>Do</span></h2>
  <p className="wwd-subtitle">
    We spend your energies and resources on moving forward towards finding solutions for all your problems.
  </p>

  <div className="wwd-grid">
    <div className="wwd-left">
      <details>
        <summary>      
          <span className="summary-text">Our Mission</span>
          <span className="summary-icon">▼</span>
        </summary>
        <p>To empower customer satisfaction by providing cost-effective and reliable digital solutions.</p>
      </details>
      <details>
        <summary>      
          <span className="summary-text">Our Vision</span>
          <span className="summary-icon">▼</span>
        </summary>
        <p>To be a global leader in building next-gen technologies with user-first design and delivery.</p>
      </details>
      <details open>
        <summary >      
          <span className="summary-text">Why Choose Us?</span>
          <span className="summary-icon">▼</span>
        </summary>
        <p>
          Solvira Tech is a firm that provides expertise in IT solutions for businesses,
          including Software Development, Mobile Application Development, Website Development, Digital Marketing,
          Graphic Designing, Business Consulting...
        </p>
      </details>
    </div>

    <div className="wwd-center">
      <img
        src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1000&q=80"
        alt="team planning"
      />
    </div>

    <div className="wwd-right">
      <ul>
        <li><strong>Always Available</strong> We are available 24 X 7 for you and eager to help you as it is the passion of our firm.</li>
        <li><strong>Experienced Team</strong> This blend comes from diverse backgrounds, education in leading technical institutes, and track records from associations with leading IT companies.</li>
        <li><strong>Best Offers</strong> We provide best possible offers and discounts for all your business and individual needs.</li>
      </ul>
    </div>
  </div>
</div>

    </section>
  );
}

export default AboutUs;
