import "./App.css";
import React from "react";
import Nav from "./Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faBootstrap,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify-icon/react";
import CV from "./CV-2023.pdf";
import GithubLogo from "./GithubLogo.jpg";

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
          <div className="container-fluid projects-container">
            <h2 className="display-5" id="projects-h2">Projects</h2>
            <div className="container-fluid" id="cards-div">
              <div className="card terminal row" id="project-1">
                <a
                  href="/cyber-dyne"
                  className="col-xl-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://live.staticflickr.com/65535/52458280968_05cebc79a8_b.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body cardy col-xl-6">
                  <h5 className="card-title">CyberDyne</h5>
                  <p className="card-text">
                    A todo list app inspired by a 90s aesthetic using html, css
                    and vanilla Javascript.
                  </p>
                  <div className="project-a-div">
                    <a
                      href="https://github.com/anthonyradose/cyber-dyne"
                      className="btn bts github-btns"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="github-img" src={GithubLogo} alt="github logo"></img>
                    </a>
                    <a
                      href="/cyber-dyne"
                      className="btn bts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Take me there!
                    </a>
                  </div>
                </div>
              </div>
              <div className="card terminal row" id="project-2">
                <a
                  href="/pokemon-app"
                  className="col-xl-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://live.staticflickr.com/65535/52458237115_0fbfdb8a5b_b.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body cardy col-xl-6">
                  <h5 className="card-title">Pokemon Pokedex</h5>
                  <p className="card-text">
                    A partial clone of the pokemon pokedex you would find on
                    google using HTML, CSS, React, the framework Material UI and
                    utilizing an API.
                  </p>
                  <div className="project-a-div">
                    <a
                      href="https://github.com/anthonyradose/pokemon-app"
                      className="btn bts github-btns"
                      target="_blank"
                      rel="noreferrer"
                    >
                          <img className="github-img" src={GithubLogo} alt="github logo"></img>
                    </a>
                    <a
                      href="/pokemon-app"
                      className="btn bts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Take me there!
                    </a>
                  </div>
                </div>
              </div>
              <div className="card terminal row" id="project-3">
                <a
                  href="/weather-app"
                  className="col-xl-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://live.staticflickr.com/65535/52544440806_db996cca4b_o.png"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body cardy col-xl-6">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                    A weather app using html, css, React, and APIs (In
                    Progress...)
                  </p>
                  <div className="project-a-div">
                    <a
                      href="https://github.com/anthonyradose/weather-app"
                      className="btn bts github-btns"
                      target="_blank"
                      rel="noreferrer"
                    >    <img className="github-img" src={GithubLogo} alt="github logo"></img></a>
                    <a
                      href="/weather-app"
                      className="btn bts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Take me there!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-me">
          <div className="container-fluid" id="about-container">
            <div className="about-me-h2-div">
              <h2 className="display-5" id="about-h2">
                About Me
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
          <h2 className="footer-h2">Contact</h2>
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
