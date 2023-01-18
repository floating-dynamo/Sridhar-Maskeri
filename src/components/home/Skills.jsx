import React from "react";
import skills from "../../data/skills";
import Bar from "./Bar";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="bg2"></div>
      <p className="skills-title-1">Why choose me? 🤔</p>
      <h1 className="skills-title-2">My Skills 🎖️</h1>
      <div className="skills-list">
        {skills.map((skill) => {
          return (
            <div className="skill" key={skill.name}>
              <div className="skill-content">
                <p>{skill.name}</p>
                <img src={skill.img} alt={skill.name} className="skill-img" />
              </div>
              <Bar prof={skill.prof} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
