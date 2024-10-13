import React, { useEffect } from "react";
import animation from "./animation";

const Project = ({ setProject }) => {
  // useEffect(() => {
  //   animation();
  // }, []);

  return (
    <div className="subSections ">
      <a href="#projects">
        <div className="circle" onClick={() => setProject(false)}>
          <i className=" material-icons">remove</i>
        </div>
      </a>
      <div className="projectBoxes">
        <div className="singleProject">
          <div className="projectSubBoxes">
            <a href="https://vasu412.github.io/Geekathon/" target="blank">
              <img src="./s1.png" alt="" />
            </a>
          </div>
          <div className="projectInfo">
            <div className="projectTitle">F1 - FORMULA 1 CLONE</div>
            <div>
              <img src="https://skillicons.dev/icons?i=html,css" alt="" />
            </div>
            <div className="projectDescription">
              A visually engaging replica of a Formula 1 website built using
              modern CSS techniques. This project emphasizes advanced styling
              with animations, grid layouts, and responsive design to recreate
              the excitement of motorsport. The clone features interactive
              elements, clean typography, and dynamic sections that mimic the
              official Formula 1 website experience.
            </div>
            <div className="projectLinks">
              <a href="https://vasu412.github.io/Geekathon/" target="blank">
                Preview
              </a>
              <a
                href="https://github.com/vasu412/Geekathon?tab=readme-ov-file"
                target="blank">
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="singleProject">
          <div className="projectSubBoxes">
            <a
              href="https://vasu412.github.io/html-files/YouTube_Clone/"
              target="blank">
              <img src="./youtube.png" alt="" />
            </a>
          </div>
          <div className="projectInfo">
            <div className="projectTitle">YOUTUBE CLONE</div>
            <div>
              <img src="https://skillicons.dev/icons?i=html,css" alt="" />
            </div>
            <div className="projectDescription">
              A YouTube clone built with CSS replicates the core layout and
              design of the popular video-sharing platform. The project
              demonstrates mastery in CSS techniques such as Flexbox, Grid,
              hover effects, media queries for responsiveness, and custom
              styling for buttons, search bars, and video controls. It
              highlights proficiency in creating a visually appealing,
              user-friendly interface that mimics the look and feel of YouTube's
              video streaming platform.
            </div>
            <div className="projectLinks">
              <a
                href="https://vasu412.github.io/html-files/YouTube_Clone/"
                target="blank">
                Preview
              </a>
              <a
                href="https://github.com/vasu412/html-files/tree/main/YouTube_Clone"
                target="blank">
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="singleProject">
          <div className="projectSubBoxes">
            <a href="https://vasu412.github.io/Meditation/" target="blank">
              <img src="./meditation.png" alt="" />
            </a>
          </div>
          <div className="projectInfo">
            <div className="projectTitle">ZENFUL ZONE</div>
            <div>
              <img src="https://skillicons.dev/icons?i=html,css,js" alt="" />
            </div>
            <div className="projectDescription">
              Zenful Zone is a modern meditation platform built using JavaScript
              . It offers a serene and intuitive user interface, guiding users
              through mindfulness exercises, breathing techniques, and
              meditation sessions. The website provides a calming experience
              with smooth animations, immersive visuals, and an easy-to-navigate
              layout, designed to help users find peace and relaxation in their
              busy lives.
            </div>
            <div className="projectLinks">
              <a href="https://vasu412.github.io/Meditation/" target="blank">
                Preview
              </a>
              <a
                href="https://github.com/vasu412/Meditation?tab=readme-ov-file"
                target="blank">
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="singleProject">
          <div className="projectSubBoxes">
            <a href="https://swiggggyyy.vercel.app/" target="blank">
              <img src="./swiggy.png" alt="" />
            </a>
          </div>
          <div className="projectInfo">
            <div className="projectTitle">SWIGGY</div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=html,css,tailwind,react,nodejs,redux,firebase"
                alt=""
              />
            </div>
            <div className="projectDescription">
              A full-stack web application built with React that replicates the
              functionality of the Swiggy food delivery platform. This project
              includes features like user authentication, restaurant browsing,
              food item selection, and dynamic cart updates. The frontend is
              developed using React for smooth and interactive user experiences,
              while the backend is integrated through RESTful APIs to fetch
              restaurant and food data.
            </div>
            <div className="projectLinks">
              <a href="https://swiggggyyy.vercel.app/" target="blank">
                Preview
              </a>
              <a href="https://github.com/vasu412/Swiggy" target="blank">
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="singleProject">
          <div className="projectSubBoxes">
            <a href="https://drive-v.vercel.app/" target="blank">
              <img src="./drive.png" alt="" />
            </a>
          </div>
          <div className="projectInfo">
            <div className="projectTitle">GOOGLE DRIVE</div>
            <div>
              <img
                src="https://skillicons.dev/icons?i=html,tailwind,react,firebase,redux"
                alt=""
              />
            </div>
            <div className="projectDescription">
              Implemented seamless Google Drive integration using React to
              enable secure file uploads, downloads, and viewing of personal
              projects directly within the portfolio. Leveraged Google Drive API
              to fetch and display files, allowing visitors to easily explore my
              work. Focused on smooth UX and data security to enhance the user
              experience.
            </div>
            <div className="projectLinks">
              <a href="https://drive-v.vercel.app/" target="blank">
                Preview
              </a>
              <a href="https://github.com/vasu412/Drive" target="blank">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
