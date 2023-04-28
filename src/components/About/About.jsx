import React from "react";
import "../../styles/About.scss";
import img from "../../images/(39) BRCR7102.JPG";

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="row">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="desc">
          <p>
            I am a UX designer specializing in UX research. My strengths lie in
            my communication skills, leadership abilities, and fluency in
            multiple languages including Vietnamese, English, and Japanese. With
            my expertise in UX research, I am able to identify user needs and
            translate them into effective design solutions.
          </p>
          <p>
            As a UX designer, I am responsible for ensuring that products and
            services are intuitive and user-friendly. With my leadership skills,
            I am able to guide teams through the design process, from research
            to implementation, ensuring that every step is executed with
            precision and excellence. My technical expertise and people skills
            make me a valuable asset to any team or project, and I am committed
            to delivering the best possible user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
