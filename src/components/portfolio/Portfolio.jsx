import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/portfolio10.png";

import MeruD from "../../assets/shopiverse.png";
import PortfolioImg from "../../assets/shopiverse-admin.png";
import NikeUI from "../../assets/nike-ui.png";
import MyxelliaAdmin from "../../assets/myxellia-admin.png";
import Hubeatz from "../../assets/hubeatz.png";

const data = [
  {
    id: 11,
    image: MeruD,
    title: "MERU DAIRY SACCO",
    github: "https://github.com/zidnely/merudairysacco",
    demo: "https://merudairysacco-cfad5.web.app/",
    description:
      "HTML, CSS, and JS website for Meru Daily Sacco, integrating React, Vue, and Tailwind CSS for a user-friendly experience.",
  },

  {
    id: 11,
    image: PortfolioImg,
    title: "PORTFOLIO",
    github: "https://github.com/zidnely/zidnely-react-portfolio",
    demo: "https://zidnely-react-portfolio.vercel.app/",
    description:
      "HTML, CSS, and JS website for Meru Daily Sacco, integrating React, Vue, and Tailwind CSS for a user-friendly experience.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
