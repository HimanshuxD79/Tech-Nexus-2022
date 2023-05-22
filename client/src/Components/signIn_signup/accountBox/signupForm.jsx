import React, { useContext, useEffect } from "react";
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
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../firebase';
import { useState } from "react";
import "./others.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);
  const clearvalues = () => {
    setfullname('');
    setemail('');
    setpassword('');
    setconfirmpassword('');
  }
  const submithandler = async (event) => {
    if (email.length === 0 || fullname.length === 0 || password.length === 0 || confirmpassword.length === 0) {
      alert('Oops! something went wrong please fill carefully');
      return;
    }
    if (password !== confirmpassword) {
      alert('password dont match');
      return;
    }
    try {
      setloading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password)
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
  const logouthandler = async (event) => {
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
      props.loggedout();
    }
  }, [user])
  return (
    <BoxContainer>
      {user ? null : <FormContainer>
        <Input type="text" placeholder="Full Name" value={fullname} onChange={(event) => { setfullname(event.target.value) }} />
        <Input type="email" placeholder="Email" value={email} onChange={(event) => { setemail(event.target.value) }} />
        <Input type="password" placeholder="Password" value={password} onChange={(event) => { setpassword(event.target.value) }} />
        <Input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(event) => { setconfirmpassword(event.target.value) }} />
      </FormContainer>}
      <Marginer direction="vertical" margin={10} />
      {user ? null : (loading ? (<Box
        color="white"
        style={{
          textAlign: "center",
          maxWidth: "420px",
          marginTop: "0px",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>) : (<SubmitButton type="submit" onClick={submithandler}>Sign Up</SubmitButton>))}
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={logouthandler}>Logout</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <div className="askSignUp">{user ? null : <MutedLink>
        Already have an account?
        <BoldLink onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>}
      </div>
    </BoxContainer>
  );
}
