import React, { useState } from "react";
import styles from "./contactUs.module.css";
import { BiXCircle } from "react-icons/bi";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import validator from "validator";

const ContactUs = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const validateEmail = () => {
    if (validator.isEmail(email)) {
      return true;
    } else {
      setEmailError("Enter valid Email!");
      return false;
    }
  };

  const [isContactUsOpen, setIsContactUsOpen] = props.functions;

  const closeButton = () => {
    setIsContactUsOpen(false);
  };

  const submitHandler = (event) => {
    if (email.length === 0 || name.length === 0 || feedback.length === 0) {
      alert("An error occured. Please fill carefully");
      return;
    }
    if (!validateEmail()) {
      return;
    }

    const data = {
      name: name,
      email: email,
      feedback: feedback,
    };
    setLoading(true);
    axios
      .post(
        "https://queries-8a1ee-default-rtdb.firebaseio.com/feedback.json",
        data
      )
      .then((response) => {
        setLoading(false);
        alert("Feedback Sent successfully");
        setIsContactUsOpen(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(" An Error occured");
      });
  };

  return (
    <section id={styles["contactUs"]}>
      <div className={styles.contactUsForm}>
        <h1>Contact Us</h1>
        <button className={styles.closeButton} onClick={() => closeButton()}>
          <BiXCircle />
        </button>
        <form action="">
          <div className={styles.inputBlock}>
            <label>Name</label>
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              type="text"
            />
          </div>
          <div className={styles.inputBlock}>
            <label>Email</label>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
            />
          </div>
          <div className={styles.feedbackInputBlock}>
            <label>Feedback</label>
            <textarea
              id=""
              cols="30"
              rows="7"
              className={styles.left}
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
            ></textarea>
          </div>
          <div className={styles.submitButton}>
            {loading ? (
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
              <button onClick={submitHandler} type="submit">
                SUBMIT
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
