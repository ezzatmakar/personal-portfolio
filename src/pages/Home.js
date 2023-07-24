import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Ezzat Makar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to='mailto:ezzatmakar93@gmail.com'><EmailIcon /></Link>
          <Link to='https://github.com/ezzatmakar'><GithubIcon /></Link>
          <Link to='https://www.linkedin.com/in/ezzat-makar/'><LinkedInIcon /></Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, VueJS, HTML, CSS, jQuery,
              BootStrap.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, NestJS, ExpressJs, Laravel, Zend Framework MySQL, MongoDB, PostgreSQL, Redis.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;