import React from "react";
import "./Home.css";
import logo from "./logo.png";
import nith from "./nith.png";
// import "font-awesome/css/font-awesome.min.css";
import Div100vh from "react-div-100vh";
// import video from "./home.mp4";
import { Link } from "react-router-dom";
import Particle from "./Particlesbg";
import Text from "./Text/Text";

export default function Home() {
  return (
    <Div100vh>
      <div id="homeComponent">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "54%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <Text />
        </div>
        <Particle />
        <div id="heading">
          <div id="line-1">
            <p data-text="Tech">Tech</p>
            <div id="logo">
              <img src={logo} alt="" />
            </div>
            <p data-text="NEXUS">Nexus</p>
          </div>
          <div id="line-2">
            <p data-text="2k22">2k22</p>
          </div>
        </div>
        <div id="body">
          <div id="text">
            <div id="tagLine">Meeting the Extraordinary</div>
            <Link
              to={{
                pathname: `/competitions`,
              }}
            >
              <button id="registerbtn">SEE RESULTS</button>
            </Link>
          </div>
          {/* <div className="leaderBoard5050">
          <Link
              to={{
                pathname: `/cicleaderboard`,
              }}
            >
              <button id="leaderbtn">Leaderboard Gizem</button>
            </Link>
          </div> */}
        </div>
        {/* <div id="leaderboard">
          <a 
          href="technexus.in/cicleaderboard"
          target="_blank"
          rel="noopener noreferrer">
            Leaderboard of Gizem 
          </a>
        </div> */}
        <div id="init-msg">
          <img src={nith} alt="" />
          <p className="homeLower">
            An initiative by National Institute of Technology, Hamirpur
          </p>
        </div>
        {/* <div id="video">
          <video id="background" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div> */}
        {/* <div id="socialLinks">
          <a href="https://twitter.com/TechNexusNith">
            <i className="fa fa-twitter icon-3d" />
          </a>
          <a href="https://instagram.com/tech_nexus_nith">
            <i className="fa fa-instagram icon-3d" />
          </a>
          <a href="https://www.linkedin.com/company/tech-nexus-nit-hamirpur">
            <i className="fa fa-linkedin-square icon-3d" />
          </a>
        </div> */}
      </div>
    </Div100vh>
  );
}
