import React from 'react';
import Navbar from "../components/Navbar";
import "../styles/About.css"; 

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our GitHub Explorer platform! Our mission is to make open-source contributions easier,
          more accessible, and beginner-friendly. Whether you're a developer, a student, or a tech enthusiast,
          we help you find GitHub profiles, explore repositories, and understand how people are building real-world projects.
        </p>

        <p>
          This platform is designed for learning, collaboration, and community. It’s more than just a profile viewer —
          it’s your entry point into the world of open-source.
        </p>

        <p className="more-link">
          Want to dive deeper into our story?{' '}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            Know more about us →
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
