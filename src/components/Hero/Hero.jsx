import React from "react";
import "../../styles/Hero.scss";
import profilePic from "../../images/profile-pic.jpeg";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="text-container">
        <h1>
          Hello! I’m <span className="bold-text">Hung</span>.<br />A UX designer
          based in Ho Chi Minh City.
        </h1>
        <p className="description">
          A creative, skillful, funny and chill guy.
        </p>
      </div>
      <div className="image-container">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
