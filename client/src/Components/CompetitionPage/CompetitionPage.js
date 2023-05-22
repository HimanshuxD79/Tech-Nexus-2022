import React, { useEffect, useState } from "react";
import hackathon from "./assets/banners/web_hack2.jpeg";
import crypto from "./assets/banners/web_crypto.jpeg";
import ideathon from "./assets/banners/web_ideathon.jpeg";
// import epilysi from "./assets/banners/web_epilysi.jpeg";
import comingSoon from "./assets/banners/web_comingsoon.jpeg";
import web_BGMI from "./assets/banners/web_BGMI.jpeg";
import valo from "./assets/banners/valo.gif";
import epilysi from "./assets/banners/web_epilysi.jpeg";
import gizem from "./assets/banners/web_gizem.png";
import "./competitionPage.css";
import { Link } from "react-router-dom";
import { slides } from "./assets/data";
import Loader from "../loader/Loader";

const CompetitionPage = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [time, setTime] = useState(Date.now());

  const imageLoaded = () => {
    var compe = document.getElementById("events");

    var image = compe.querySelector("img");
    console.log(image);
    let isLoaded = image.complete && image.naturalHeight !== 0;
    if (isLoaded === true) {
      setShowLoading(false);
      console.log(showLoading);
    }
  };

  useEffect(() => {
    imageLoaded();
    if (showLoading) {
      const interval = setInterval(() => setTime(Date.now()), 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  const [showDetail, setShowDetail] = useState(false);
  const [currentPosterDetail, setCurrentPosterDetail] = useState(1);

  // console.log("Current  " + currentPosterDetail);
  // console.log("Slide details " + slides[currentPosterDetail - 1]);
  const PosterHovered = (id) => {
    setShowDetail(true);
    // console.log(id);
    setCurrentPosterDetail(id);
  };

  const PosterUnHovered = () => {
    setShowDetail(false);
  };

  // console.log(showDetail);
  return (
    <>
      {showLoading ? <Loader /> : ""}
      <section
        id="events"
        style={{ filter: showLoading ? "brightness(0)" : "brightness(1)" }}
      >
        {/* <div className="responsiveHeading">EVENTS</div> */}
        <div className="backgroundAnim">
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
        </div>
        <div className="circle-container">
          <div className="aboutEvents">
            {showDetail && window.innerWidth >= 1024 ? (
              <>
                <h6>{slides[currentPosterDetail - 1].heading}</h6>
                <p>
                  <p>{slides[currentPosterDetail - 1].prizePool}</p>

                  <br />
                  {slides[currentPosterDetail - 1].miniContent}
                </p>
              </>
            ) : (
              <div>COMPETITIONS </div>
            )}
          </div>

          <Link
            to={{
              pathname: `/competitions/1`,
            }}
            className="deg0"
            onMouseEnter={() => {
              PosterHovered(1);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={hackathon} />
          </Link>
          <Link
            to={{
              pathname: `/competitions/2`,
            }}
            className="deg45"
            onMouseEnter={() => {
              PosterHovered(2);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={ideathon} />
          </Link>
          <Link
            to={{
              pathname: `/competitions/3`,
            }}
            className="deg135"
            onMouseEnter={() => {
              PosterHovered(3);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={epilysi} />
          </Link>
          <Link
            to={{
              pathname: `/competitions/4`,
            }}
            className="deg180"
            onMouseEnter={() => {
              PosterHovered(4);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={crypto} />
          </Link>
          <Link
            to={{
              pathname: `/competitions/5`,
            }}
            className="deg225"
            onMouseEnter={() => {
              PosterHovered(5);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={valo} />
          </Link>
          <Link
            to={{
              pathname: `/competitions/6`,
            }}
            className="deg270"
            onMouseEnter={() => {
              PosterHovered(6);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={gizem} />
          </Link>
          <Link
            to={{
              pathname: `/competitions/7`,
            }}
            className="deg315"
            onMouseEnter={() => {
              PosterHovered(7);
            }}
            onMouseLeave={() => {
              PosterUnHovered();
            }}
          >
            <img alt="a unique title" src={web_BGMI} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CompetitionPage;
