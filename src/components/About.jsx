import React from "react";
import ContactForm from "./ContactForm";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

const About = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <div>
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={handleLogoClick}
          />
        </div>
        <div className="top-right-buttons">
          <Link to="/about">About</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/chart">Chart</Link>
          <ThemeToggleButton />
        </div>
      </div>
      <div className="about-page">
        <h2>About</h2>
        <p>
          Project-Pro is a super-convenient project-management app that provides
          multiple tools like the Calendar and Chart to help visualize and
          manage construction projects.
          <br />
          Feel free to contact us for any suggestions or inquiries using the
          form below!
        </p>

        <h3>Contact Us</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
