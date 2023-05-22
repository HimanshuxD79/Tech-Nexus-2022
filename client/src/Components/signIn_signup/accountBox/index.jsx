import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import backgroundVideo from '../Assets/bg.m4v';
import "./others.css";
const BoxContainer = styled.div`
  width: 550px;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  border-radius: 22px;

  background-color: rgb(2,0,36);
background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,242,105,0.8463760504201681) 35%, rgba(0,212,255,1) 100%);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  
  overflow: hidden;
  position : absolute;
  left: 30%;
  margin-top : 3%;
  
 
  @media (max-width : 600px) {
    left: 15%
    width: 100%;
    min-height: 120%;
  overflow: hidden;
  }
  @media (max-width : 400px) {
    width: 100%;
  min-height: 110%;
    left: -2%;
    border-radius : 0;
    margin: 0;
    overflow: hidden;
  }
  @media (max-width : 730px) {
    width: 100%;
    min-height: 110%;
  overflow: hidden;
    left: 0%;
    border-radius : 0;
    margin: 0;
  }

  
  
`;
//this things not getting reflected on the site

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 180%;
  height: 790px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 40%;
  transform: rotate(50deg);
  top: -390px;
  left: -210px;
  background: rgb(241, 196, 15);
  background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(5,89,147,0.9668242296918768) 0%, rgba(2,0,36,1) 99%);
  @media (max-width : 600px) {
    width: 160%;
  height: 550px;
  border-radius: 50%;
  transform: rotate(30deg);
  top: -290px;
  left: -80px;
  }
  @media (max-width : 400px) {
    width: 160%;
    height: 550px;
    border-radius: 50%;
  transform: rotate(30deg);
  top: -290px;
  left: -80px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-family: "Fira Sans";
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  margin-top: 3em;
  
  align-items: center;
  text-align: center;
  @media (max-width : 400px) {
    left: -2%;
   
    
  }
  @media (max-width : 600px) {
    left: -2%;
    
    
  }
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };


  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="videobox">
        <video
          src={backgroundVideo}

          autoPlay={true}
          muted
          loop></video>
      </div>
      <BoxContainer >
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText><div className="askSignUp">Please sign-in to continue!</div></SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText><div className="askSignUp">Please sign-up to continue!</div></SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm siggnedin={props.signnedin} loggedout={props.loggedout} />}
          {active === "signup" && <SignupForm siggnedin={props.signnedin} loggedout={props.loggedout} />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
