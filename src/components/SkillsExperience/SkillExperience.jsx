import React from "react";
import "../../styles/SkillsExperience.scss";

const SkillsExperience = () => {
  return (
    <section className="skills-experience">
      <div className="skills">
        <h2>Skills</h2>
        <div className="item">UX Research</div>
        <div className="item">Interaction Design</div>
        <div className="item">Wireframe</div>
        <div className="item">Prototyping</div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <div className="item company">
          <span>4Digit Vietnam </span>
          <span>2022-2023</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
