import React from "react";
import "./ca.css";
import {
  BsList,
  BsGiftFill,
  BsFillAwardFill
} from "react-icons/bs";
import { FcApproval, FcConferenceCall, FcBusinessman, FcBullish, FcShare, FcManager, FcPositiveDynamic, FcMindMap, FcGraduationCap } from "react-icons/fc";
import "font-awesome/css/font-awesome.min.css";
import Div100vh from "react-div-100vh";
// import logo from "./logo1.mp4";
import logo from './logo.png';
import benefit from "./benefit.png";

const ca = () => {
  window.onscroll = function () {
    const navList = document.querySelector("#navList");
    if (window.innerWidth <= 992) {
      if (navList.style.height === "60vh") navList.style.height = "0vh";
    }
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (window.innerWidth <= 992) navList.classList.add("nav-highlight");
      document
        .querySelector("#cp-ambd #ca-navbar")
        .classList.add("nav-highlight");
      document
        .querySelector("#cp-ambd #social-links")
        .classList.add("link-highlight");
    } else {
      if (window.innerWidth <= 992) navList.classList.remove("nav-highlight");
      document
        .querySelector("#cp-ambd #ca-navbar")
        .classList.remove("nav-highlight");
      document
        .querySelector("#cp-ambd #social-links")
        .classList.remove("link-highlight");
    }
  };

  const expand = () => {
    const navList = document.querySelector("#navList");
    if (window.innerWidth <= 992) {
      if (navList.style.height !== "60vh") {
        navList.style.height = "60vh";
        document.querySelector("#cp-ambd #ca-navbar").style.padding = "20px 0px 0px 0px";
        document.querySelector("#cp-ambd #ca-navbar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      } else {
        navList.style.height = "0vh";
        document.querySelector("#cp-ambd #ca-navbar").style.padding = "20px 5px";
        document.querySelector("#cp-ambd #ca-navbar").style.backgroundColor = "transparent";
      }
    }
  };
  return (
    <div id="cp-ambd">
      <nav id="ca-navbar">
        <a href="https://technexus.in">
          <div id="logo">Tech Nexus</div>
        </a>
        <div id="navList" className="">
          <a href="#home">
            <div onClick={expand}>Home</div>
          </a>
          <a href="#about">
            <div onClick={expand}>About Us</div>
          </a>
          <a href="#benefits">
            <div onClick={expand}>Why CA?</div>
          </a>
          <a href="#responsibilities">
            <div onClick={expand}>Responsibilities</div>
          </a>
          <a href="#rewards">
            <div onClick={expand}>Rewards</div>
          </a>
          <a href="#registration">
            <div onClick={expand}>Registration</div>
          </a>
          <a href="https://www.technexus.in/contactus">
            <div onClick={expand}>Contact Us</div>
          </a>
        </div>
        <div id="collapseBtn" onClick={expand}>
          <BsList />
        </div>
      </nav>
      <Div100vh>
        <div id="home">
          <div id="home-mask">
            {/* <video id="background" autoPlay loop muted>
            <source src={logo} type="video/mp4" />
          </video> */}
            <img src={logo} id="tnLogo" alt="" />
            <p id="theme">Chance to be the face of a National Level Fest.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScwQZXmEK3YiVibeMCkgHGzMX86EN1O74gH1ChLIIDntWhMyg/viewform">
              <button id="registerbtn">Register</button></a>
          </div>
        </div>
      </Div100vh>
      <section id="about" className="dark">
        <div className="heading">
          <span>About Us</span>
        </div>
        <div className="content">
          Tech Nexus is the annual inter-collegiate Technical and Entrepreneurship festival organized by the students of NIT Hamirpur. Tech Nexus is a non-profit organization which was launched in 2021 with the aim of developing interest and encouraging innovation in technology among students of India. National Institute of Technology Hamirpur, widely celebrated as a centre of academic excellence, is proud to announce the 1st edition of its Technological and Entrepreneurial Festival, Tech Nexus. Innovation and perseverance form the forefront of this blockbuster event, with social welfare also getting the importance it deserves. For our events we impute ambassadors from different colleges throughout the country, whose main responsibility is to publicize Tech Nexus, in and out of his/her college, while giving them the opportunity to develop their organizational and management skills.
        </div>
      </section>

      <section id="benefits">
        <div className="heading">
          <span>Why CA?</span>
        </div>
        <div className="content">
          <div id="benefits-list">
            <div className="benefit">
              <div className="benefit-icon">
                <FcConferenceCall />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Be Part of Tech Nexus</div>
                <div className="benefit-desc">
                  Golden opportunity to witness the grandeur of Tech Nexus and Be a part of national level event promotion and brand management
                </div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FcPositiveDynamic />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Self Improvement</div>
                <div className="benefit-desc">
                  Excellent platform to sharpen your Communication and Technical skills
                </div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FcMindMap />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Grow your Network</div>
                <div className="benefit-desc">
                  Form a valuable network with thousands of brilliant like-minded students from all across the country
                </div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FcManager />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Become organiser of National Level Fest</div>
                <div className="benefit-desc">
                  Chance to organize National Level Competitions in your college
                </div>
              </div>
            </div>
          </div>
          <div className="content-image">
            <img src={benefit} alt="" />
          </div>
        </div>
      </section>

      <section id="responsibilities" className="dark">
        <div className="heading">
          <span>Responsibilities</span>
        </div>
        <div className="content">
          <div className="res-card">
            <div className="icon">
              <FcBusinessman />
            </div>
            <div className="head">Coordination</div>
            <div className="info">
              The responsibilities of CAs include coordinating with the various participating colleges. With the help of Tech Nexus, CAs organize workshops and events in their respective colleges.
            </div>
          </div>
          <div className="res-card">
            <div className="icon">
              <FcBullish />
            </div>
            <div className="head">Publicity</div>
            <div className="info">
              A campus ambassador also helps in publicising Tech Nexus, and ensuring participation of the respective campus community
            </div>
          </div>
          <div className="res-card">
            <div className="icon">
              <FcShare />
            </div>
            <div className="head">Social Media</div>
            <div className="info">
              CAs also have to promote Tech Nexus through the social media platform by publicizing its events on various social media channels andutilising their social media network for the growth of fest.
            </div>
          </div>
        </div>
      </section>

      <section id="rewards">
        <div className="heading">
          <span>Rewards</span>
        </div>
        <div className="content">
          <div className="reward-card">
            <div className="number">01</div>
            <div className="head">Prizes</div>
            <div className="icon">
              <BsGiftFill />
            </div>
            <div className="info">
              Awesome Prizes, Goodies, special recogonition on our Social media channels and website.
            </div>
          </div>
          <div className="reward-card">
            <div className="number">02</div>
            <div className="head">LOR</div>
            <div className="icon">
              <FcApproval />
            </div>
            <div className="info">
              Letter of Recommendation will be awarded to most active ambassadors.
            </div>
          </div>
          <div className="reward-card">
            <div className="number">03</div>
            <div className="head">Certificates</div>
            <div className="icon">
              <BsFillAwardFill />
            </div>
            <div className="info">
              A Certificate of Appreciation undersigned by Tech Nexus NIT Hamirpur to top 100 CA's
            </div>
          </div>
          <div className="reward-card">
            <div className="number">04</div>
            <div className="head">Free Access</div>
            <div className="icon">
              <FcGraduationCap />
            </div>
            <div className="info">
              Top Ambassadors will get a chance to attend Workshops at Tech Nexus, NIT Hamirpur
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="dark">
        <div className="heading">
          <span>Registration</span>
        </div>
        <div className="content">
          <div className="head">Process</div>
          <div className="info">
            The campus ambassador program has been posted on Internshala and can
            be applied on the given link. After applying from internshala, you
            will have a telephonic session which will inform you of your
            responsibilities to a greater depth.
          </div>
          <div className="head">Eligibility</div>
          <div className="info">
            The only eligibility criteria is that you should have a valid
            college ID card. There are no specific constraints on year in which
            you study, if you are a resourceful person it will surely add up
            your chances to be one of the top campus ambassadors.
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScwQZXmEK3YiVibeMCkgHGzMX86EN1O74gH1ChLIIDntWhMyg/viewform">
            <button id="registerbtn">Register Here</button></a>
        </div>
      </section>

      <div id="social-links">
        <a href="https://twitter.com/TechNexusNith" target="_blank" rel="noreferrer"><i className="fa fa-twitter icon-3d" /></a>
        <a href="https://instagram.com/tech_nexus_nith" target="_blank" rel="noreferrer"><i className="fa fa-instagram icon-3d" /></a>
        <a href="https://www.linkedin.com/company/tech-nexus-nit-hamirpur" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square icon-3d" /></a>
      </div>
    </div>
  );
};

export default ca;
