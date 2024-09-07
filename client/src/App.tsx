import React, { useEffect, useState } from "react";
import "./App.css";
import Job from './components/Job';
import Project from './components/project';
import Scroll_Banner from './components/Scroll_Banner';
import job from './types/job';
import project from './types/project';

function App() {
  const [projects, setProjects] = useState<project[]>([]);
  const [jobs, setJobs] = useState<job[]>([])
  const [title, setTitle] = useState<string>("Case Zumbrum's Portfolio")
  const [image, setImage] = useState<string>("/static/images/case.png")
  const a: HTMLAudioElement = new Audio("/meow.mp3");
  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/projects").then((response) => {
      response.json().then((projects) => {
        console.log(projects)
        setProjects(projects);
      });
    });

    fetch(import.meta.env.VITE_API + "/work").then((response) => {
      response.json().then((jobs) => {
        console.log(jobs)
        setJobs(jobs);
      });
    });
  }, []);

  const reveal_secret = () => {
    if (title == "Case Zumbrum's Portfolio") {
      setTitle("Cat Zumbrum's Portfolio");
      setImage("/cat.jpg")
      a.play();
    }
    else {
      setTitle("Case Zumbrum's Portfolio");
      setImage("/static/images/case.png")
    }
  }
  return (
    <div className="app">
      <div className="header">
        <div className="header__title" onClick={reveal_secret}>
          {title}
        </div>
        <div className="header__desc">
          A <span style={{ color: "rgb(78, 201, 176)" }}>{"FastAPI"}</span>{", "}
          <span style={{ color: "#d7ba7d" }}>{"MongoDB"}</span>{", and "}
          <span style={{ color: "rgb(197, 134, 192)" }}>
            {"React "}
          </span>
          stack{" "}
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
          <img src={image}></img>
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
              href="https://docs.google.com/document/d/1MOTXNbck3oeZoYUyFrlqaqhfbghRPDtDoLcmGVzJUS0/pub"
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
      <div className='work'>
        <div className='work__title'>
          <span>Work Experience</span>
        </div>
        <div className='work__content'>
          {jobs.map((job) => (
            <Job {...job}></Job>
          ))}
        </div>
      </div>
      <div className="skills">
        <div className='skills__title'>Skills</div>
        <Scroll_Banner></Scroll_Banner>
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
