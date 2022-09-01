import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Portfolio.css";

const Portfolio = () => {
    const navigate = useNavigate();
  const navigateToUpdate = (id) => {
    navigate(`/project/${id}`);
  };
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
    return (
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
          {projects.map(({ id, image, title }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <button
                    onClick={() => navigateToUpdate(id)}
                    className="btn btn-primary"
                  >
                    Details Info
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
};

export default Portfolio;