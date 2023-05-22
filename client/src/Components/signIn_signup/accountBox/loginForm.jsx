import React, { useContext, useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import backgroundVideo from '../Assets/bg.m4v';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth'
import { auth } from '../../../firebase';
import "./others.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);

  const clearvalues = () => {
    setpassword('');
    setemail('');
  }
  const signinhandler = async () => {
    if (email.length === 0 || password.length === 0) {
      alert('Please fill all details!');
      return;
    }
    try {
      setloading(true);
      let response = await signInWithEmailAndPassword(auth, email, password)
        .catch(e => {
          let errorcode = e.code.split("auth/")[1];
          alert(errorcode);
        });
      setloading(false);
      clearvalues();
    }
    catch (error) {
      setloading(false);
    }
  }

  const handlelogout = async () => {
    await signOut(auth);
  }

  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  });

  useEffect(() => {
    if (user) {
      props.siggnedin();
    }
    else {
      //console.log('this runs')
      props.loggedout();
    }
  }, [user])
  return (
    <>
      <div className="videobox">
        <video
          src={backgroundVideo}
          autoPlay={true}
          muted
          loop></video>
      </div>
      <BoxContainer >
        {user ? null : <FormContainer>
          <Input type="email" placeholder="Email" value={email} onChange={(event) => setemail(event.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(event) => setpassword(event.target.value)} />
        </FormContainer>}
        <Marginer direction="vertical" margin={10} />

        <Marginer direction="vertical" margin="1.6em" />
        {user ? null : (loading ? (<Box
          color="white"
          style={{
            textAlign: "center",
            maxWidth: "420px",
            marginTop: "0px",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>) : (<SubmitButton type="submit" onClick={signinhandler}>Sign In</SubmitButton>))}
        <Marginer direction="vertical" margin="1.0em" />
        <SubmitButton type="submit" onClick={handlelogout}>Logout</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        {user ? null : <MutedLink >
          <div className="askSignUp">Don't have an account ?{" "}
            <BoldLink onClick={switchToSignup}>
              Sign Up
            </BoldLink></div>
        </MutedLink>}
      </BoxContainer></>
  );
}
