import React from "react";
import "../../styles/Work.scss";
import ProjectSketch from "../../images/project-sketch.png";
import Project2 from "../../images/project-2.webp";

const Work = () => {
  return (
    <section className="work">
      <h2>Work</h2>
      <div className="projects">
        <div className="project">
          <div className="image">
            <img src={ProjectSketch} alt="Project 1" />
          </div>
          <div className="description">
            <div className="name">Project 1</div>
            <div className="tags">Web Design / UX / UI</div>
            <div className="brief">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              massa tellus. Integer semper ultricies velit quis malesuada.{" "}
            </div>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={Project2} alt="Project 2" />
          </div>
          <div className="description">
            <div className="name">Project 2</div>
            <div className="tags">Mobile App / UX / UI</div>
            <div className="brief">
              Phasellus facilisis ex a mi dignissim consequat. Nulla facilisi.
              Sed in leo nunc. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae.
            </div>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={ProjectSketch} alt="Project 3" />
          </div>
          <div className="description">
            <div className="name">Project 3</div>
            <div className="tags">Graphic Design / Branding</div>
            <div className="brief">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Aliquam posuere libero eros, ac fringilla
              lorem bibendum a. Nullam tempor facilisis nulla, non imperdiet
              justo volutpat quis.{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
