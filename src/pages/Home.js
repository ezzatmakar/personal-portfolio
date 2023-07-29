import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "../styles/Home.css";
import PdfViewer from "../components/PdfViewer";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h1>
          Hi, My Name is Ezzat Makar
        </h1>
        <div className="prompt">
          <Typed
            strings={[
              "I'm software developer with a passion for learning and creating",
              "I'm currently developing various open-source projects"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div className="prompt">
          <Link to='mailto:ezzatmakar93@gmail.com'><EmailIcon /></Link>
          <Link to='https://github.com/ezzatmakar'><GithubIcon /></Link>
          <Link to='https://www.linkedin.com/in/ezzat-makar/'><LinkedInIcon /></Link>
          <Link to='tel:+201067370803'><PhoneIcon /></Link>
          <PdfViewer />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, NestJS, ExpressJs, Laravel, Zend Framework.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP, TypeScript</span>
          </li>
          <li className="item">
            <h2>DataBases</h2>
            <span>MySQL, MongoDB, PostgreSQL, Redis</span>
          </li>
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, VueJS, HTML, CSS, jQuery,
              BootStrap.
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Docker, Git, Terminal</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;