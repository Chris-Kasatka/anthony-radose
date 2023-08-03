import "./App.css";
import React from "react";
import Nav from "./Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faBootstrap,
  faJs,
  faReact,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify-icon/react";
import CV from "./CV-2023.pdf";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.jpg";

const App = () => {
  return (
    <div className="App">
      <header id="top">
        <Nav />
      </header>

      <main>
        <section className="Intro">
          <div className="container-fluid intro-container" id="heading">
            <div id="h-divs">
              <h1 className="display-1">Anthony Radose</h1>
              <h2>Front-end Developer</h2>
            </div>
            <div class="arrow-container">
              <a href="#projects">
                <div class="arrow1"></div>
                <div class="arrow2"></div>
                <div class="arrow3"></div>
              </a>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container projects-container">
            <div className="projects-h2-div">
            <h2 className="display-2" id="projects-h2">
              PROJECTS
            </h2>
            </div>
            <div className="row">
              <div className="col-6 col-lg-4 mb-4">
                <div className="card" id="project-1">
                  <img
                    src={project1}
                    className="card-img-top project-image"
                    alt="Project 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">CyberDyne</h5>
                    <div className="mt-3">
                      <a href="/cyber-dyne">
                      <FontAwesomeIcon icon={faSquareGithub} className="github-logo" />
                      </a>

                      <a href="/cyber-dyne" className="btn btn-primary">
                        Take me There!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4 mb-4">
                <div className="card" id="project-2">
                  <img
                    src={project2}
                    className="card-img-top project-image"
                    alt="Project 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pokemon Pokedex</h5>
                    <div className="mt-3">
                      <a href="/cyber-dyne">
                      <FontAwesomeIcon icon={faSquareGithub} className="github-logo" />

                      </a>

                      <a href="/cyber-dyne" className="btn btn-primary">
                        Take me There!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4 mb-4">
                <div className="card" id="project-3">
                  <img
                    src={project3}
                    className="card-img-top project-image"
                    alt="Project 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Weather App</h5>
                    <div className="mt-3">
                      <a href="/cyber-dyne">
                      <FontAwesomeIcon icon={faSquareGithub} className="github-logo" />

                      </a>

                      <a href="/cyber-dyne" className="btn btn-primary">
                        Take me There!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4 offset-lg-4 mb-4">
                <div className="card" id="project-4">
                  <img
                    src={project4}
                    className="card-img-top project-image"
                    alt="Project 4"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Landing Page</h5>
                    <div className="mt-3">
                      <a href="/cyber-dyne">
                      <FontAwesomeIcon icon={faSquareGithub} className="github-logo" />

                      </a>

                      <a href="/cyber-dyne" className="btn btn-primary">
                        Take me There!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-me">
          <div className="container-fluid" id="about-container">
            <div className="about-h2-div">
              <h2 className="display-2" id="about-h2">
                ABOUT ME
              </h2>
            </div>
            <div className="about-me-p-div">
              <p className="about-me-p">
                David Lee Roth is a God, Blade Runner is the greatest movie of
                all time, and video games rule!
              </p>
              <p className="about-me-p">
                Hello, I am a junior front-end developer always looking to
                expand my knowledge and learn something new!
              </p>
              <p className="about-me-p">
                When I'm not coding, I play guitar, play video games, post rad
                stuff on Instagram, and drink coffee and beer!
              </p>
            </div>
            <div className="tech-stack">
              <div className="tech-stack-containers">
                <h3>What I know:</h3>
                <div className="tech-stack-icons">
                  <FontAwesomeIcon icon={faHtml5} />
                  <i className="bi bi-filetype-css"></i>
                  <FontAwesomeIcon icon={faBootstrap} />
                  <FontAwesomeIcon icon={faJs} />
                  <FontAwesomeIcon icon={faReact} />
                  <i className="bi bi-git"></i>
                  <i className="bi bi-github"></i>
                </div>
              </div>
              <div className="tech-stack-containers">
                <h3>What I'm learning:</h3>
                <div className="tech-stack-icons">
                  <Icon icon="simple-icons:mongodb" />
                  <i className="bi bi-filetype-tsx"></i>
                </div>
              </div>
            </div>

            <div className="container-fluid about-img-container">
              <img
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1582220107107-590dc8b0fad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1623762736174-77dccc1e571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://live.staticflickr.com/65535/52458246845_7e9cfb9949_b.jpg"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="img-fluid about-img"
                alt="..."
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container" id="footer-div">
          <h2 className="footer-h2">CONTACT</h2>
          <div>
            <ul id="footer-list">
              <li className="footer-li">
                Email: <span>asradose@gmail.com</span>
              </li>
              <li className="footer-li ">
                <a
                  className="footer-link footer-links"
                  href="https://github.com/anthonyradose"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github footer-icons"></i>
                </a>
              </li>
              <li className="footer-li ">
                <a
                  className="footer-link footer-links"
                  href="https://www.instagram.com/asradose/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram footer-icons"></i>
                </a>
              </li>
              <li className="footer-li ">
                <a
                  className="footer-link footer-links"
                  href="https://www.linkedin.com/in/anthony-radose-35a969236/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin footer-icons"></i>
                </a>
              </li>
              <li className="footer-li ">
                <a
                  className="footer-link footer-links"
                  href={CV}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-file-person footer-icons"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
