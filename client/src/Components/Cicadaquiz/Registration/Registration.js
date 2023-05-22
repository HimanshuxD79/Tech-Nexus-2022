import React, { useEffect, useState } from "react";
import classes from "./Registration.module.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Registration = (props) => {
  const [teamname, setteamname] = useState("");
  const [teamleadername, setteamleadername] = useState("");
  const [phone, setphone] = useState("");
  const [loading, setloading] = useState(false);
  const [wrong, setwrong] = useState(null);
  const [someuser, setsomeuser] = useState(null);
  const [member1, setmember1] = useState("");
  const [member2, setmember2] = useState("");
  const [registered, setregistered] = useState(false);
  const [already, setalready] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) setsomeuser(currentUser.email);
    else {
      setsomeuser(null);
    }
  });
  useEffect(() => {
    axios
      .get(
        "https://technexuslogin-default-rtdb.firebaseio.com/allcandidate.json"
      )
      .then((response) => {
        for (const key in response.data) {
          if (response.data[key].email == someuser) {
            setregistered(true);
            setalready("already");
            break;
          }
        }
      });
  }, [someuser]);
  const numberchangehandler = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setphone(e.target.value);
    }
  };
  const sendtodb = (event) => {
    event.preventDefault();
    if (
      teamname.length === 0 ||
      phone.length === 0 ||
      teamleadername.length === 0
    ) {
      setwrong("Please fill all details !!!");
      console.log("IF PASSED");
      return;
    }
    setwrong(null);
    setloading(true);
    const today = new Date();
    const data = {
      teamname: teamname,
      teamleadername: teamleadername,
      phone: phone,
      email: someuser,
      members: [member1, member2],
      time:
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      Rounds: 0,
    };
    axios
      .post(
        "https://technexuslogin-default-rtdb.firebaseio.com/allcandidate.json",
        data
      )
      .then((response) => {
        setloading(false);
        setregistered(true);
      })
      .catch((error) => console.log(error));
    cancelCourse();
  };
  const cancelCourse = () => {
    setteamleadername("");
    setteamname("");
    setphone("");
    setmember1("");
    setmember2("");
  };

  return (
    <React.Fragment>
      <section className={classes.cicadaReg}>
        {/* <div className={classes.backgroundAnim}>
          <div className={`${classes.light} ${classes.x1}`}></div>
          <div className={`${classes.light} ${classes.x2}`}></div>
          <div className={`${classes.light} ${classes.x3}`}></div>
          <div className={`${classes.light} ${classes.x4}`}></div>
          <div className={`${classes.light} ${classes.x5}`}></div>
          <div className={`${classes.light} ${classes.x6}`}></div>
          <div className={`${classes.light} ${classes.x7}`}></div>
          <div className={`${classes.light} ${classes.x8}`}></div>
          <div className={`${classes.light} ${classes.x9}`}></div>
        </div> */}

        <div className={classes.heading}>GIZEM REGISTRATION</div>
        {/* <div className={classes.notification}>
            Registration closed
          </div> */}

          {registered ? (
  <div className={classes.notification}>
    You are {already} Successfully registered!!
    <br /> Happy Hacking
  </div>
) : null}
{wrong ? (
  <div className={classes.notification}>
    <p>{wrong}</p>
  </div>
) : null}
{!registered && (
  <form id="myform" className={classes.myfeedbackform}>
    <input
      name="Team name"
      type="text"
      className={classes.feedbackinput}
      placeholder="Team name"
      value={teamname}
      onChange={(event) => {
        setteamname(event.target.value);
      }}
    />
    <input
      name="Team leader name"
      type="text"
      className={classes.feedbackinput}
      placeholder="Team Leader name"
      value={teamleadername}
      onChange={(event) => {
        setteamleadername(event.target.value);
      }}
    />
    <input
      name="phone no."
      type="tel"
      className={classes.feedbackinput}
      placeholder="Phone number"
      value={phone}
      onChange={numberchangehandler}
    />

    <input
      name="Member 1"
      type="text"
      className={classes.feedbackinput}
      placeholder="Member 1 (optional)"
      value={member1}
      onChange={(event) => {
        setmember1(event.target.value);
      }}
    />

    <input
      name="Member 2"
      type="text"
      className={classes.feedbackinput}
      placeholder="Member 2 (optional)"
      value={member2}
      onChange={(event) => {
        setmember2(event.target.value);
      }}
    />

    {/* {number > 0 ? (
      <input
        name="Member 1"
        type="text"
        className={classes.feedbackinput}
        placeholder="Member 1"
        value={member1}
        onChange={(event) => {
          setmember1(event.target.value);
        }}
      />
    ) : null}
    {number > 1 ? (
      <input
        name="Member 2"
        type="text"
        className={classes.feedbackinput}
        placeholder="Member 2"
        value={member2}
        onChange={(event) => {
          setmember2(event.target.value);
        }}
      />
    ) : null}
    {number > 2 ? (
      <input
        name="Member 3"
        type="text"
        className={classes.feedbackinput}
        placeholder="Member 3"
        value={member3}
        onChange={(event) => {
          setmember3(event.target.value);
        }}
      />
    ) : null} */}
    {registered ? null : loading ? (
      <Box
        color="#CC6666"
        style={{
          textAlign: "center",
          maxWidth: "420px",
          margin: "50px auto",
          marginTop: "0px",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    ) : (
      <div className={classes.btncontainer}>
        <button className={classes.btn} onClick={sendtodb}>
          Submit
        </button>
      </div>
    )}
  </form>
)}

<div className={classes.starttext}>
  <span> Signed in as :</span> <span>{someuser}</span>
</div>

        
        
      </section>
    </React.Fragment>
  );
};

export default Registration;
