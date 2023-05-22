import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Ca from "./Components/ca/ca";
import Navbar from "./Components/Navbar2/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutsUs/aboutus";
import CompetitionPage from "./Components/CompetitionPage/CompetitionPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import Sponsors from "./Components/Sponsors/Sponsor";
import Guestcards from "./Components/guestLecture/Guestcards";
import CompetitionDetail from "./Components/CompetitionPage/CompetitionDetail";
import Sign from "./Components/signIn_signup/accountBox/index";
import Alert from "./Components/Alert/Alert";
import Loader from "./Components/loader/Loader";
import Feedback from "./Components/Feedback/Feedback";
import Registration from "./Components/Cicadaquiz/Registration/Registration";
import Leaderboard from "./Components/Cicadaquiz/Leaderboard/Leaderboard";
import Rounds from "./Components/Cicadaquiz/Rounds/Rounds";
import Rounds4 from './Components/Cicadaquiz/Rounds/Rounds4';
import Sendemailtoallplayers from './Components/Cicadaquiz/Rounds/Sendemailtoallplayers';

function App() {
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  const [showLoading, setShowLoading] = useState(true);
  const [isauthenticated, setisauthenticated] = useState(false);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const usersigninhandler = () => {
    setisauthenticated(true);
  };
  // console.log(isauthenticated, "isauthentic");
  const location = useLocation();
  const closeNav = () => {
    if (location.pathname === "/nexus2k21feedback") {
      return;
    }
    const mainDiv = document.getElementsByTagName("main")[0];
    let spanContent = document.querySelectorAll(".afterLogoLinkName");
    let sidebar = document.getElementsByClassName("sidebar")[0];
    mainDiv.style.filter = "blur(0px)";
    if (sidebar.classList.contains("close")) {
    } else {
      sidebar.classList.add("close");
    }
    for (var i = 0; i < spanContent.length; i++) {
      spanContent[i].style.display = "none";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {showLoading && <Loader />}
      {location.pathname === "/ca" ||
      location.pathname === "/nexus2k21feedback" ? null : (
        <Navbar
          functions={[isContactUsOpen, setIsContactUsOpen]}
          alertClicked={() => setIsAlertOpen(true)}
          alertRemoved={() => setIsAlertOpen(false)}
          isAuth={isauthenticated}
        />
      )}
      <Routes>
        <Route exact path="ca" element={<Ca />} />
      </Routes>
      <main onClick={() => closeNav()}>
        {isContactUsOpen ? (
          <ContactUs functions={[isContactUsOpen, setIsContactUsOpen]} />
        ) : (
          ""
        )}
        {isauthenticated ? (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/gizemregistration"
              element={<Registration />}
            ></Route>
            <Route exact path ="cicleaderboard" element={<Leaderboard/>}/>
            <Route exact path="nexus2k21feedback" element={<Feedback />} />
            <Route exact path="aboutus" element={<AboutUs />} />
            <Route exact path="competitions" element={<CompetitionPage />} />
            <Route exact path="lifelong" element = {<Rounds/>}/>
            <Route
              exact
              path="competitions/:id"
              element={<CompetitionDetail />}
            />
            <Route exact path="contactus" element={<ContactUs />} />
            <Route exact path="sponsors" element={<Sponsors />} />
            <Route exact path="guestlectures" element={<Guestcards />} />
            <Route exact path="aboutus" element={<AboutUs />} />
            <Route exact path="round1" element={<Rounds r = "1" placeholder = "killer's name"/>} />
            <Route exact path="round2" element={<Rounds r = "2" placeholder = "Code"/>} />
            <Route exact path="round3" element={<Rounds r = "3" placeholder = "location,state,country"/>} />
            <Route exact path="round4" element={<Rounds4 r = "4" />} />
            <Route exact path="round5" element={<Rounds r = "5" placeholder = "location"/>} />
            <Route exact path="round6" element={<Rounds r = "6" placeholder = "location"/>} />
            <Route exact path="round7" element={<Rounds r = "7" placeholder = "password"/>} />
            
            <Route exact path="crptickey" element={<Sendemailtoallplayers />} />
            
            <Route
              exact
              path="signin"
              element={
                <Sign
                  signnedin={usersigninhandler}
                  loggedout={() => {
                    setisauthenticated(false);
                  }}
                />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="ca"></Route>
            <Route exact path="sponsors" element={<Sponsors />} />
            <Route exact path="guestlectures" element={<Guestcards />} />
            <Route exact path="aboutus" element={<AboutUs />} />

            <Route
              path="*"
              element={
                <>
                  <Sign
                    signnedin={usersigninhandler}
                    loggedout={() => {
                      setisauthenticated(false);
                    }}
                  />
                </>
              }
            ></Route>
          </Routes>
        )}
        {!isauthenticated && isAlertOpen ? <Alert /> : null}
      </main>
    </div>
  );
}

export default App;
