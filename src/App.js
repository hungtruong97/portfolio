import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SkillsExperience from "./components/SkillsExperience/SkillExperience";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SkillsExperience />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default App;
