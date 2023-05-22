import React, { useState } from "react";
import style from "./aboutus.module.css";
import icon1 from "./images/social-icon11111.png";
import icon2 from "./images/social-icon2222.png";
import icon3 from "./images/social-icon33333.png";
import icon5 from "./images/social-icon555555.png";
import yt from "./images/yt.png";
import emailicon from "./images/email-icon11.png";

import director from "./images/director.jpg";
import bharti from "./images/bharti.jpg";
import priyanka from "./images/priyanka.jpg";
import supriya from "./images/supriya.jpeg";

import ritwik from "./images/ritwik.jpg"
import vidhi from "./images/vidhi.jpeg"
import akshat from "./images/akshat.jpg"
import snehal from "./images/snehal.jpg"
import nikhil from "./images/nikhil.png"
import rakshita from "./images/rakshita.jpg"
import divyanshi from "./images/divyanshi.jpg"
import shalini from "./images/shalini.jpg"
import ashish from "./images/ashish.jpg"
import namrata from "./images/namrata.jpg"
import purvi from "./images/purvi.jpeg"
import apoorva from "./images/apoorva.jpg"
import vandit from "./images/vandit.jpeg"
import uvesh from "./images/uvesh.jpg"
import divyam from "./images/divyam.jpeg"
import yamini from "./images/yamini.jpeg"
import aryan from "./images/aryan.jpeg"
import sachin from "./images/sachin.jpg"
import gaurav from "./images/gaurav.jpeg"
import khwab from "./images/khwab.jpg"
import vishwjeet from "./images/vishwjeet.jpeg"
import kanak from "./images/kanak.jpeg"
import rushika from "./images/rushika.jpeg"
import vishaliny from "./images/vishaliny.jpg"
import vyomender from "./images/vyomender.jpeg"
import baneet from "./images/baneet.JPG"
import bhavna from "./images/bhavna.jpg"

import ContactUs from "../ContactUs/ContactUs";
import { motion } from "framer-motion";
const AboutUs = () => {
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  const openContactUs = () => {
    setIsContactUsOpen(true);
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };
  return (
    <>
      {isContactUsOpen ? (
        <ContactUs functions={[isContactUsOpen, setIsContactUsOpen]} />
      ) : (
        ""
      )}
      {/* <div className={style.container}> */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className={style.wrapper}
      >
        <div className={style.aboutUsContainer}>
          <motion.header variants={item}>
            {/* <div className={style.logo}><img src={svglogo} alt="" /></div> */}
            <div className={style.heading}>
              <h1 className={style.head}>ABOUT US</h1>
            </div>
          </motion.header>

          <motion.div variants={item} className={style.content}>
            <motion.div variants={item} className={style.text}>
              <p>
                {/* Tech-Nexus, a national-level technical fest, is one of the
                events of NIT Hamirpur, aimed at providing a premier platform
                for students to showcase their unique ideas, concepts, and
                trends in the field of science and technology. The goal is to
                bring together technical brains and provide them a forum to
                discuss ideas and expand their expertise via mentoring sessions
                led by exceptional speakers from the real corporate world.
                <br /> <br />
                Events from diverse sectors have been hand-picked to pique
                participants` curiosity, allowing them to exhibit their
                scientific insights and novel ideas. Tech-Nexus will provide
                exposure and give future tech-marvels a taste of the corporate
                world while ensuring a collaborative environment.
                <br /> <br /> */}
                One of the premier institutions for technical education in the
                country, the National Institute of Technology, Hamirpur has
                strived to provide students with the best academic syllabi and
                even better academic exposure since its establishment in 1986.
                <br />
                <br />
                Tech-Nexus is the National Level Virtual Fest organized by R&C
                Cell, NIT-Hamirpur is a pristine platform that provides an
                amalgamation of innovation and learning. The Essence of
                Tech-Nexus is to connect all the technical minds across the
                nation and provide them a platform to express their skills and
                ideas. Being organized for the first time by NIT Hamirpur, the
                fest would be a great opportunity to kindle their imagination.
                It aims to canvas the Technical Perspective of budding minds, it
                further imparts a realistic approach to showcase their ideas.
                With “KAINOTOMIA” as its theme, Tech-Nexus aims to bring
                together all the virtual worlds together and celebrate
                technology.
                <br />
                <br />
                Events from diverse sectors have been hand-picked to excite the
                participants’ curiosity, allowing them to exhibit their
                scientific insights and unique ideas. The event will be preceded
                by live electric activities such as Esports, Hackathons, Cryptic
                Hunt, and many more amazing surprises. Tech-Nexus has been
                established to reignite the spark that had been extinguished by
                the pandemic. Because of the presence of well-known
                personalities onboard, the fest promises a one-of-a-kind
                experience full of innovation, networking, and learning.
              </p>
              <a
                onClick={() => openContactUs()}
                className={style.btn}
                href="#/"
              >
                Contact Us
              </a>
            </motion.div>

            <div className={style.imgCont}>
              <div className={style.socialIcons}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/tech_nexus_nith/"
                >
                  <img src={icon1} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/tech-nexus-nit-hamirpur/"
                >
                  <img src={icon2} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/WUkznJTKAw"
                >
                  <img src={icon3} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UC6tbDnqtFuIKVaciVuyG2rA"
                >
                  <img src={yt} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/TechNexusNith/status/1457018596106727424?t=el4DovFHkeMqsyzh4dOzuA&s=08"
                >
                  <img src={icon5} alt="" />
                </a>
              </div>
              <a href="mailto:technexus21@nith.ac.in">
                <img className={style.emailIcon} src={emailicon} alt="" />
              </a>
            </div>

            <div className={style.mediaq}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/tech_nexus_nith/"
              >
                <img src={icon1} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/tech-nexus-nit-hamirpur/"
              >
                <img src={icon2} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/WUkznJTKAw"
              >
                <img src={icon3} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UC6tbDnqtFuIKVaciVuyG2rA"
              >
                <img src={yt} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/TechNexusNith/status/1457018596106727424?t=el4DovFHkeMqsyzh4dOzuA&s=08"
              >
                <img src={icon5} alt="" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className={style.facultyContainer}>
          <div>
            <h1>OUR TEAM</h1>
          </div>
          <br />
            <br />
            <br />
          <h2>DIRECTOR</h2>
          <div className={style.facCardContainer}>
            <div className={style.facCard}>
              <div className={style.facImage}>
                <a
                  href="https://portfolios.nith.ac.in/index.php?/nith/dr-lalit-kumar-awasthi-"
                  target="__blank"
                >
                  <img src={director} alt="" />
                </a>
              </div>
              <div className={style.facName}>
                Prof. Lalit Kumar Awasthi <br />
                <h5> Director, NIT Hamirpur</h5>
              </div>
            </div>
            <br />
            <br />
            <br />
            <h2>FACULTY INCHARGES</h2>
            <br />
            <br />
            <div className={style.facCard}>
              <div className={style.facImage}>
                <a
                  href="https://portfolios.nith.ac.in/index.php?/nith/ms-bharti-kaul144"
                  target="__blank"
                >
                  <img src={bharti} alt="" />
                </a>
              </div>
              <div className={style.facName}>
                Ms. Bharti Bakshi Kaul <br />
                <h5>Faculty incharge Coordinator</h5>
              </div>
            </div>

            <div className={style.facCard}>
              <div className={style.facImage}>
                <a
                  href="https://portfolios.nith.ac.in/index.php?/nith/dr-priyanka"
                  target="__blank"
                >
                  <img src={priyanka} alt="" />
                </a>
              </div>
              <div className={style.facName}>
                Dr. Priyanka Rathee <br />
                <h5>Faculty incharge Co-Coordinator</h5>
              </div>
            </div>

            <div className={style.facCard}>
              <div className={style.facImage}>
                <a
                  href="https://portfolios.nith.ac.in/index.php?/nith/dr-supriya-jaiswal"
                  target="__blank"
                >
                  <img src={supriya} alt="" />
                </a>
              </div>
              <div className={style.facName}>
                Dr. Supriya Jaiswal <br />
                <h5>Faculty Organising Committee Member</h5>
              </div>
            </div>

            <div className={style.facCard}>
              <div className={style.facImage}>
                <a
                  href="https://portfolios.nith.ac.in/index.php?/nith/dr-sandeep-kumar-singh"
                  target="__blank"
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/511333573119320064/3q1981fx_400x400.jpeg"
                    alt=""
                  />
                </a>
              </div>
              <div className={style.facName}>
                Dr. Sandeep Kumar Singh
                <br />
                <h5>Faculty Organising Committee Member</h5>
              </div>
            </div>
          </div>
        </div>
        
        <div className={style.finalyear}>
        <h2>CORE TEAM</h2>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
  
                  <img src={baneet} alt="" />
                
              </div>
              <div className={style.facNameStudent}>
                Baneet Kumar <br />
                <h5> President, Tech Nexus</h5>
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={vyomender} alt="" />
                
              </div>
              <div className={style.facNameStudent}>
                Vyomender Mehta <br />
                <h5> Vice President, Tech Nexus</h5>
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={ritwik} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Ritwik Duggal <br />
                <h5> Overall Head, Tech Nexus</h5>
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={vidhi} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Vidhi Shekhawat <br />
                <h5> Technical Head, Tech Nexus</h5>
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={snehal} alt="" />
              </div>
              <div className={style.facNameStudent}>
               Snehal Saini <br />
                <h5> PR and Marketing Head, Tech Nexus</h5>
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                  <img src={akshat} alt="" />
              </div>
              <div className={style.facNameStudent}>
               Akshat Jain <br />
                <h5> Creative Head, Tech Nexus</h5>
              </div>
            </div>

            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                  <img src={nikhil} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Nikhil Kumar <br />
                <h5> Joint Technical Head, Tech Nexus</h5>
              </div>
            </div>
            </div>
            <div className={style.thirdyear}>
              <h2>COORDINATORS</h2>
              <br /><br />
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={apoorva} alt="" />
              </div>
              <div className={style.facNameStudent}>
              Apoorva kaushal <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={aryan} alt="" />
              </div>
              <div className={style.facNameStudent}>
              Aryan Sehgal <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={ashish} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Ashish Saraswat <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={bhavna} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Bhavna <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={divyam} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Divyam Garg <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={divyanshi} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Divyanshi Verma <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={gaurav} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Gaurav Negi <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={kanak} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Kanak Sharma <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={khwab} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Khwab Kalra <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={uvesh} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Mohammad Uvesh <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={namrata} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Namrata Yadav <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={purvi} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Purvi Rathore <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={rakshita} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Rakshita Verma <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={rushika} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Rushika Singh <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={sachin} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Sachin  <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={shalini} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Shalini Shekhawat <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={vandit} alt="" />
              </div>
              <div className={style.facNameStudent}>
              Vandit Sharma <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={vishaliny} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Vishaliny V <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={vishwjeet} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Vishwjeet Singh <br />
              </div>
            </div>
            <div className={style.facCardStudent}>
              <div className={style.facImageStudent}>
                
                  <img src={yamini} alt="" />
              </div>
              <div className={style.facNameStudent}>
                Yamini Sharma <br />
              </div>
            </div>
            </div>
      </motion.div>
    </>
  );
};
export default AboutUs;
