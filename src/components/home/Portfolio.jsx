import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import { generateSlug } from "../../utils";
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedProj, setSelectedProj] = useState([]);
  const categoryFilter = [
    "All",
    "Web Development",
    "App Development",
    "Front-End",
    "Back-End",
  ];
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedCat("All");
    setSelectedProj(projects);
  }, []);
  return (
    <div className="portfolio">
      <p className="portfolio-title-1">My Portfolio 📝</p>
      <h1 className="portfolio-title-2">Recent Works 📖</h1>
      <div className="portfolio-list">
        <div className="portfolio-filter">
          {categoryFilter.map((category) => {
            return (
              <p
                key={category}
                className={
                  selectedCat === category
                    ? "portfolio-filter-active category"
                    : "category"
                }
                onClick={() => {
                  setSelectedCat(category);
                }}
              >
                {category}
              </p>
            );
          })}
        </div>
        <div className="portfolio-projects">
          {selectedProj.map((project) => {
            if (project.tags.includes(selectedCat)) {
              return (
                <div
                  className="portfolio-project"
                  key={project.id}
                  onClick={() => {
                    const slug = generateSlug(project.name);
                    navigate(`/portfolio/${slug}`, {
                      state: { project: project },
                    });
                  }}
                >
                  <img src={project.img} alt={project.name} />
                  <h2>{project.name}</h2>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
