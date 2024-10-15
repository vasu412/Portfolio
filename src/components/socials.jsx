import React from "react";
import { handleSectionChange } from "./animation";
import { Link } from "react-scroll";

const Socials = ({ setSocial, isTransitioning, setIsTransitioning }) => {
  return (
    <div className="subSections">
      <Link to="socials" smooth={true} duration={300}>
        <i
          className="hero-text material-icons"
          style={{ fontSize: "30px" }}
          onClick={() =>
            handleSectionChange(
              setSocial,
              "hero",
              false,
              isTransitioning,
              setIsTransitioning
            )
          }>
          keyboard_arrow_up
        </i>
      </Link>
      <div className="boxes hero-text">
        <div
          className="github box"
          onClick={() => window.open("https://github.com/dashboard", "_blank")}>
          <img
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>GITHUB : @Vasu412</span>
        </div>
        <div
          className="linkedin box"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/vasu-singla-38bbb72a8/",
              "_blank"
            )
          }>
          <img
            src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>LINKEDIN : @Vasu</span>
        </div>
        <div
          className="slack box"
          onClick={() =>
            window.open("https://snapchat.com/t/dykrUahb", "_blank")
          }>
          <img
            src="https://images.unsplash.com/photo-1636516214833-3377b36bdcb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNuYXBjaGF0fGVufDB8fDB8fHww"
            alt=""
          />
          <span>SNAPCHAT : @vasu_singla</span>
        </div>
        <div
          className="instagram box"
          onClick={() =>
            window.open("https://www.instagram.com/_vasu.singla/", "_blank")
          }>
          <img
            src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>INSTAGRAM : @_vasu.singla</span>
        </div>
        <div
          className="facebook box"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100006889907007",
              "_blank"
            )
          }>
          <img
            src="https://images.pexels.com/photos/20716651/pexels-photo-20716651/free-photo-of-facebook-logo-on-smartphone.jpeg?auto=compress&cs=tinysrgb&w=800"
            style={{ filter: "grayscale(1)" }}
          />
          <span>FACEBOOK</span>
        </div>
        <a href="./resume.docx.pdf" download={"vasu's resume"}>
          <div className="resume box">
            <img
              src="https://images.pexels.com/photos/5598289/pexels-photo-5598289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>RESUME</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
