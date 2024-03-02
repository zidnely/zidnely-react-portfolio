import React from "react";
import "./services.css";

// This is later changed to work experience
const Services = () => {
  return (
    <section id="services">
      <h5>Summary of Work Experience</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              WEB DEVELOPER <br></br>
              <span className="service__white">
                Freelance <br></br>(Present)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Developing an HTML, CSS, and JS website for Meru Daily Sacco.
              </p>
            </li>
            <li>
              <p>
                - Performing Integration with third-party services, 
                testing across browsers/devices, and optimizing performance to ensure a smooth user experience.
              </p>
            </li>
            <li>
              <p>- Working with HTML, CSS and JAVASCRIPT</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>
              BACK-END ENGINEER (CONTRACT)<br></br>
              <span className="service__white">
                FREELANCE <br></br>(Jul 2023 - Sep 2023)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>- Developed a backend inventory-server for an eCommerce inventory system</p>
            </li>
            <p>
              - Implemented features for product management, including CRUD operations 
              for products, inventory tracking with real-time updates, and order processing 
              functionality, including order validation and status management
            </p>
            <li>
              <p>
                - Worked with Node.js, Express.js, and MongoDB. 
              </p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  );
};

export default Services;
