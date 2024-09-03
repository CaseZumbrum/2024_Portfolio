import React, { useEffect, useState } from "react";
import "./App.css";
import Project from './components/project';
import project from './types/project';

function App() {
  const [projects, setProjects] = useState<project[]>([]);
  useEffect(() => {
    fetch("http://www.casezumbrum.com/posts").then((response) => {
      response.json().then((projects) => {
        setProjects(projects);
      });
    });
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="header__title">Case Zumbrum's Portfolio</div>
        <div className="header__desc">
          A <span style={{ color: "rgb(78, 201, 176)" }}>{"MERN"}</span>{" "}
          <span style={{ color: "rgb(255, 215, 10)" }}>{"("}</span>
          <span style={{ color: "rgb(197, 134, 192)" }}>
            {"MongoDB, Express, React, NodeJs"}
          </span>
          <span style={{ color: "rgb(255, 215, 10)" }}>{")"}</span> stack{" "}
          <span style={{ color: "rgb(86, 156, 214)" }}>{"portfolio"}</span> site
          for all of my{" "}
          <span style={{ color: "rgb(86, 156, 214)" }}>{"projects"}</span>!
          Currently running on{" "}
          <span style={{ color: "rgb(78, 201, 176)" }}>{"AWS Lightsail"}</span>{" "}
          and using{" "}
          <span style={{ color: "rgb(86, 156, 214)" }}>{"cloud"}</span> based{" "}
          <span style={{ color: "rgb(78, 201, 176)" }}>{"MongoDB Atlas"}</span>{" "}
          for storage.
        </div>
      </div>
      <div className="intro">
        <div className="intro__me">
          <img src="/cat.jpg"></img>
          <div className="me__links">
            <a
              className="profileLink"
              href="https://github.com/CaseZumbrum"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="profileLink"
              href="mailto: casezumbrum@ufl.edu"
              target="_blank"
            >
              Email
            </a>
            <a
              className="profileLink"
              href="https://docs.google.com/document/d/1MOTXNbck3oeZoYUyFrlqaqhfbghRPDtDoLcmGVzJUS0/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <a
              className="profileLink"
              href="https://linkedin.com/in/case-zumbrum"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="intro__description">
          <span style={{ color: "#d7ba7d" }}>Case_Zumbrum</span>
          <span style={{ color: "rgb(255, 181, 24)" }}>{"("}</span>
          <span style={{ color: "rgb(156, 220, 254)" }}>{"classOf"}</span>
          <span style={{ color: "rgb(212, 212, 212)" }}>{"="}</span>
          <span style={{ color: "rgb(148, 206, 168)" }}>{"2027"}</span>
          <span style={{ color: "rgb(255, 181, 24)" }}>{"){"}</span>
          <br></br>
          I'm a second year{" "}
          <span style={{ color: "rgb(78, 201, 176)" }}>
            {"Computer Engineering"}
          </span>{" "}
          student at the{" "}
          <span style={{ color: "rgb(206, 114, 60)" }}>
            {"University of Florida"}
          </span>
          .<br></br>
          <br></br>
          I'm very interested in{" "}
          <span style={{ color: "rgb(86, 156, 214)" }}>
            {"Machine Learning"}
          </span>
          ,{" "}
          <span style={{ color: "rgb(86, 156, 214)" }}>{"Data Analysis"}</span>,
          and <span style={{ color: "rgb(86, 156, 214)" }}>{"Web 3.0"}</span>.
          <br></br>
          <br></br>
          I'm currently working to design a{" "}
          <span style={{ color: "rgb(78, 201, 176)" }}>
            {"Hardware Fourier Transform Chip"}
          </span>{" "}
          that uses{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>
            {"Boolean Operations"}
          </span>{" "}
          to compute the{" "}
          <span style={{ color: "rgb(206, 114, 60)" }}>{"Frequencies"}</span>{" "}
          present in an input{" "}
          <span style={{ color: "rgb(197, 134, 192)" }}>{"Waveform"}</span>.
          <br></br>
          <span style={{ color: "rgb(255, 181, 24)" }}>{"}"}</span>
        </div>
      </div>
      <div className="projects">
        <div className="projects__title">
          <span>Projects</span>
        </div>
        <div className="projects__content">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
