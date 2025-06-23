import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Website Development',
    image: 'images/service_01.jpeg',
    description: 'A well-maintained website can help you gain a competitive advantage...',
  },
  {
    title: 'Application Development',
    image: 'images/service_02.jpeg',
    description: 'Businesses are using apps to improve their processes...',
  },
  {
    title: 'Software Development',
    image: 'images/service_03.jpeg',
    description: 'Collective processes involved in creating software programs...',
  },
  {
    title: 'Graphic Designing',
    image: 'images/service_04.jpeg',
    description: 'Graphic design can boost your company’s marketing...',
  },
  {
    title: 'Business Consulting',
    image: 'images/service_05.jpeg',
    description: 'Ability to pay only for the services needed...',
  },
  {
    title: ' Video Editing',
    image: 'images/service_06.jpeg',
    description: 'Your Vision, Perfectly Edited...',
  }
];

function Services() {
  return (
    <section id="services" className="padding-top">
     <div className="services-heading">
          <h6 className="sub-heading">What We Do</h6>
          <h2 className="main-heading">SERVICES</h2>
     </div>
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-sm-4" key={index}>
              <div className="service_wrap heading_space">
                <div className="image bottom10">
                  <img src={service.image} alt={service.title} />
                  <div className="overlay">
                    <a href="#!" className="overlay_center border_radius"><i className="fa fa-eye"></i></a>  
                  </div>
                </div>
                <h3 className="bottom10">{service.title}</h3>
                <p className="bottom15">{service.description}</p>
                <a href="#!" className="btn-border border_radius text-uppercase">View More</a>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;