import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to='mailto:ezzatmakar93@gmail.com'><EmailIcon /></Link>
        <Link to='https://github.com/ezzatmakar'><GithubIcon /></Link>
        <Link to='https://www.linkedin.com/in/ezzat-makar/'><LinkedInIcon /></Link>
      </div>
      <p>Ezzat Makar &copy; {currentyear} Ezzat Makar</p>
    </div>
  );
}

export default Footer;
