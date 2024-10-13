import React, { useEffect } from "react";
import animation from "./animation";

const Skills = ({ setSkill }) => {
  return (
    <div className="subSections ">
      <a href="#skills">
        <div className="circle" onClick={() => setSkill(false)}>
          <i className=" material-icons">remove</i>
        </div>
      </a>
      <div className="skillBoxes">
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
