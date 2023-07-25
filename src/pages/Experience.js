import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { Link } from "@material-ui/core";
import '../styles/Experience.css'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2022 ‐ Jul 2023"
          iconStyle={{ background: "rgb(33 50 94)", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Remote Back End Engineer | <Link to='https://www.montech.io/'>Montech Studios Inc</Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Headquarters Miami, FL
          </h4>
          <p>Montech Studios Inc is a digital transformation enterprise software development company that provides cutting‐edge blockchain‐based engineering solutions, to clients ranging from NGOs, For‐ tune 500 companies, Universities, and Banks, providing tailored solutions in emerging markets.</p>
          <h5 className="technical-title">Technical Skills:</h5>
          <p className="technical-list">Nodejs, NestJs, ExpressJs, MongoDB, MySQL</p>
          <h5 className="technical-title">Projects:</h5>
          <p className="technical-list">
            <Link to="https://admin.values.co/login">Values Co Dashboard</Link>,&nbsp;
            <Link to="https://app.values.co/login">Values Co Market</Link>,&nbsp;
            <Link to="https://derived.art/">Derived Art Market</Link>,&nbsp;
            <Link to="https://admin.derived.art/">Derived Art Admin Board</Link>,&nbsp;
            <Link to="https://museum.derived.art/login">Derived Art Museum Board</Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2021 ‐ Oct 2022"
          iconStyle={{ background: "rgb(33 50 94)", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer | <Link to='https://www.octopuspro.com/'>OctopusPro</Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cairo, Egypt
          </h4>
          <p>An Australian Field Service Management Software Company That built‐in (2005) using Zend Framework.</p>
          <h5 className="technical-title">Technical Skills:</h5>
          <p className="technical-list">PHP, Zend Framework, JavaScript, VueJs, MySQL,
            Docker, MongoDB, Redis, jQuery</p>
          <h5 className="technical-title">Projects:</h5>
          <p className="technical-list">
            <Link to="https://admin.octopuspro.com/">OctopusPro</Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 ‐ Aug 2021"
          iconStyle={{ background: "rgb(33 50 94)", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer | <Link to='https://www.sandcti.com/'>Soft kinetics</Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cairo, Egypt
          </h4>
          <p>Egyptian software house, located in Cairo, specializing in software development and software project management.</p>
          <p>Building many web apps and provide APIs for mobile apps</p>
          <h5 className="technical-title">Technical Skills:</h5>
          <p className="technical-list">PHP, Laravel framework, WordPress, JavaScript, jQuery, Bootstrap, Vue.js, Ver‐
            sion control tools.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2019 ‐ Dec 2021"
          iconStyle={{ background: "rgb(33 50 94)", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer | <Link to='https://integritycorp.net'>Integrity Corporation</Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cairo, Egypt
          </h4>
          <p>
            Egyptian software house, specializing in software development and software project management.
          </p>
          <p>
            Building many websites using PHP Laravel framework and Customize WordPress themes and Plugins
          </p>
          <h5 className="technical-title">Technical Skills:</h5>
          <p className="technical-list">PHP, Laravel framework, WordPress, JavaScript, jQuery, BootStrap</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2018 ‐ Dec 2018"
          iconStyle={{ background: "rgb(33 50 94)", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer | <Link to='https://www.bni.agency'>BNI Agency</Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cairo, Egypt
          </h4>
          <p>An Egyptian Advertising and Digital Marketing Agency In Egypt</p>
          <p>Building many websites using PHP Laravel framework and CMSs like WordPress,Drupal and Joomla</p>
          <h5 className="technical-title">Technical Skills:</h5>
          <p className="technical-list">PHP, Laravel framework, WordPress, JavaScript, jQuery, Bootstrap, Drupal CMS, and Joomla CMS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2016"
          iconStyle={{ background: "rgb(33 50 94)", color: "#e9d35b" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Cool University, Al Minya of Computers and Information collage
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MSc in Computer science
          </h4>
          <p> Data Science, Programming for Data Science, Data structure and Algorithms</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;