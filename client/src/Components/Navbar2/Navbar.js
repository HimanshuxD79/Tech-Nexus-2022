import React from "react";
import "./navbar.css";
import {
  FaBars,
  FaHome,
  FaUserTie,
  FaTrophy,
  FaChartLine,
  FaInfoCircle,
  FaRegUserCircle,
  FaBookReader,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import nith_logo from "./nith_logo.png";

const Navbar = (props) => {
  const [isContactUsOpen, setIsContactUsOpen] = props.functions;

  const showContactUs = () => {
    setIsContactUsOpen(true);
  };
  const openNav = () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let spanContent = document.querySelectorAll(".afterLogoLinkName");
    // console.log(sidebar.classList);
    console.log(spanContent);

    sidebar.classList.toggle("close");
    const mainDiv = document.getElementsByTagName("main")[0];
    if (sidebar.classList.contains("close")) {
      mainDiv.style.filter = "blur(0px)";
      // spanContent.style.display = "none";
      for (var i = 0; i < spanContent.length; i++) {
        spanContent[i].style.display = "none";
      }
    } else {
      mainDiv.style.filter = "blur(10px)";
      // spanContent.style.display = "block";
      for (var j = 0; j < spanContent.length; j++) {
        spanContent[j].style.display = "block";
      }
    }
  };

  const closeNav = (param) => {
    if (!props.isAuth && param !== 1) {
      props.alertRemoved();
      setTimeout(() => props.alertClicked(), 200);
    }
    setIsContactUsOpen(false);
    const mainDiv = document.getElementsByTagName("main")[0];
    let spanContent = document.querySelectorAll(".afterLogoLinkName");
    let sidebar = document.getElementsByClassName("sidebar")[0];
    mainDiv.style.filter = "blur(0px)";
    if (sidebar.classList.contains("close")) {
      // sidebar.classList.add("");
    } else {
      sidebar.classList.add("close");
    }
    for (var i = 0; i < spanContent.length; i++) {
      spanContent[i].style.display = "none";
    }
  };

  return (
    <section>
      <nav>
        <div className="sidebar close">
          <div className="logo-details" onClick={() => openNav()}>
            <div className="home-content">
              <FaBars className="hamburger" />
              <span className="afterLogoLinkName mainHeadNav">TECH NEXUS</span>
            </div>
          </div>
          <ul className="navLinks">
            <li>
              <Link
                onClick={() => closeNav(1)}
                to={{
                  pathname: `/`,
                }}
              >
                <FaHome className="iconNav" />
                <span className="afterLogoLinkName">Home</span>
              </Link>
              <ul className="submenu ">
                <li>
                  <Link
                    onClick={() => closeNav(1)}
                    to={{
                      pathname: `/`,
                    }}
                    className="linkName"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={() => {
                  closeNav(1);
                }}
                to={{
                  pathname: `/aboutus`,
                }}
              >
                <FaInfoCircle className="iconNav" />
                <span className="afterLogoLinkName">About Us</span>
              </Link>
              <ul className="submenu ">
                <li>
                  <Link
                    onClick={() => closeNav(1)}
                    to={{
                      pathname: `/aboutus`,
                    }}
                    className="linkName"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                onClick={() => closeNav()}
                to={{
                  pathname: `/competitions`,
                }}
              >
                <FaTrophy className="iconNav" />
                <span className="afterLogoLinkName">Competitions</span>
              </Link>
              <ul className="submenu ">
                <li>
                  <Link
                    onClick={() => closeNav()}
                    to={{
                      pathname: `/competitions`,
                    }}
                    className="linkName"
                  >
                    Competitions
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                onClick={() => closeNav(1)}
                to={{
                  pathname: `/guestlectures`,
                }}
              >
                <FaBookReader className="iconNav" />
                <span className="afterLogoLinkName"> Guest Talk</span>
              </Link>
              <ul className="submenu ">
                <li>
                  <Link
                    onClick={() => closeNav(1)}
                    to={{
                      pathname: `/guestlectures`,
                    }}
                    className="linkName"
                  >
                    Guest Talk
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <div className="iocn-link">
                <Link
                  onClick={() => closeNav()}
                  to={{
                    pathname: `/competitions`,
                  }}
                  href="#"
                >
                  <FaTrophy />
                  <span className="afterLogoLinkName">Events</span>
                  <span className="dropdown" onClick={()=>switchEvents()}>^</span>
                </Link>
              </div>
              <ul className="submenu">
                <li>
                  <Link
                    onClick={() => closeNav()}
                    to={{
                      pathname: `#`,
                    }}
                    className="linkName"
                    href="#"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => closeNav()}
                    to={{
                      pathname: `/guestlectures`,
                    }}
                    href="#"
                  >
                    Guest Lecture
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => closeNav()}
                    to={{
                      pathname: `/competitions`,
                    }}
                    href="#"
                  >
                    Competition
                  </Link>
                </li>
              </ul>
            </li> */}
            // <li>
            //   <Link
            //     onClick={() => closeNav(1)}
            //     to={{
            //       pathname: `/ca`,
            //     }}
            //     target="_"
            //   >
            //     <FaUserTie className="iconNav" />
            //     <span className="afterLogoLinkName">CA Portal</span>
            //   </Link>
            //   <ul className="submenu ">
            //     <li>
            //       <Link
            //         target="_"
            //         onClick={() => closeNav(1)}
            //         to={{
            //           pathname: `/ca`,
            //         }}
            //         className="linkName"
            //       >
            //         CA Portal
            //       </Link>
            //     </li>
            //   </ul>
            // </li>

            <li>
              <Link
                onClick={() => closeNav(1)}
                to={{
                  pathname: `/sponsors`,
                }}
              >
                <FaChartLine className="iconNav" />
                <span className="afterLogoLinkName">Sponsors</span>
              </Link>
              <ul className="submenu ">
                <li>
                  <Link
                    onClick={() => closeNav(1)}
                    to={{
                      pathname: `/sponsors`,
                    }}
                    className="linkName"
                  >
                    Sponsors
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                onClick={() => closeNav(1)}
                to={{
                  pathname: `/signin`,
                }}
              >
                <FaRegUserCircle className="iconNav" />
                <span className="afterLogoLinkName">Sign in</span>
              </Link>
              <ul className="submenu ">
                <li>
                  <Link
                    onClick={() => closeNav(1)}
                    to={{
                      pathname: `/`,
                    }}
                    className="linkName"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a
                onClick={() => {
                  closeNav(1);
                  showContactUs();
                }}
                href="#/"
              >
                <FaPhoneAlt className="iconNav" />
                <span className="afterLogoLinkName">Contact Us</span>
              </a>
              <ul className="submenu ">
                <li>
                  <a
                    onClick={() => {
                      closeNav(1);
                      showContactUs();
                    }}
                    href="#/"
                    className="linkName"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="https://nith.ac.in/" target="_blank">
            <div className="logo-details">
              <div className="home-content">
                <img src={nith_logo} alt="nith logo" />
                <span className="afterLogoLinkName mainHeadNav">
                  NIT Hamirpur
                </span>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
