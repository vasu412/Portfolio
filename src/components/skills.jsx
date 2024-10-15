import React from "react";
import { Link } from "react-scroll";
import { handleSectionChange } from "./animation";

const Skills = ({ setSkill, isTransitioning, setIsTransitioning }) => {
  return (
    <div className="subSections ">
      <Link to="skills" smooth={true} duration={300}>
        <i
          className="hero-text material-icons"
          style={{ fontSize: "30px" }}
          onClick={() =>
            handleSectionChange(
              setSkill,
              "hero",
              false,
              isTransitioning,
              setIsTransitioning
            )
          }>
          keyboard_arrow_up
        </i>
      </Link>
      <div className="skillBoxes hero-text">
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=java" alt="" />
          <h1>JAVA</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=html" alt="" />
          <h1>HTML</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=css" alt="" />
          <h1>CSS</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=tailwind" alt="" />
          <h1>TAILWIND CSS</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=javascript" alt="" />
          <h1>JAVASCRIPT</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=react" alt="" />
          <h1>REACT</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=redux" alt="" />
          <h1>REDUX</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=firebase" alt="" />
          <h1>FIREBASE</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
          <h1>NODE JS</h1>
        </div>
        <div className="imgBox">
          <img src="https://skillicons.dev/icons?i=expressjs" alt="" />
          <h1>EXPRESS JS</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
