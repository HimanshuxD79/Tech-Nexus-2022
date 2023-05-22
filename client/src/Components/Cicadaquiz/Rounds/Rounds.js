import React, { useEffect, useState } from 'react';
import classes from './Rounds.module.css';
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import emailjs from 'emailjs-com';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Rounds = (props)=>{
    const [ans,setans]  = useState('');
    const [someuser, setsomeuser] = useState('');
    const [message ,setmessage] = useState('');
    const [loading , setloading] = useState(false);
    const [correctans, setcorrectans] = useState('');
    const [emailcontent , setemailcontent] = useState('');
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== null) setsomeuser(currentUser.email);
        else {
          setsomeuser(null);
        }
      });

    useEffect(()=>{
        axios.get('https://technexuslogin-default-rtdb.firebaseio.com/ansdata.json')
        .then(response => {
            let tempans= '',emailcont;
            for(const key in response.data){
                if(parseInt(props.r) === response.data[key].Round){
                    tempans = response.data[key].answer;
                    emailcont = response.data[key].emailcontent;
                    break;
                }
            }
            setcorrectans(tempans);
            setemailcontent(emailcont);
        })
        .catch(err => console.log(err));
    },[])
    const updatedatabase = (para)=>{
        setmessage('');
        if(ans.trim().toLocaleLowerCase().length === 0){
            setmessage('Please enter answer!!!');
            return;
        }
        setmessage('');
        setloading(true);
        
        var s1 = ans.trim().toLowerCase();
        var s2 = correctans.trim().toLowerCase();
        if(s1 !== s2){
            setmessage('oops wrong answer');
            setloading(false);
            return;
        }
        axios.get("https://technexuslogin-default-rtdb.firebaseio.com/allcandidate.json")
        .then(response =>{
            var foundid = '';
            var userdata;
            for (const key in response.data) {
                if (response.data[key].email == someuser) {
                    foundid = key;
                    userdata = response.data[key];
                  break;
                }
            }
            if(foundid.length === 0){
                setmessage('You have not registered for the quiz');
                setloading(false);
                return;
            }
            else{
                const today = new Date();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                userdata.Rounds = props.r;
                userdata.time = time;
                axios.put("https://technexuslogin-default-rtdb.firebaseio.com/allcandidate/"+foundid+".json",userdata)
                .then(response => {
                    setloading('false');
                    sendEmail(userdata.teamleadername , emailcontent);
                    setmessage('Ans correct email will be sent shortly for next round... good luck');
                    setloading(false);
                })
                .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
        
    }
    const sendEmail = (teamleadername , fornextround) => {
        var templateParams = {
            from_name : 'Tech Nexus',
            to_name : teamleadername,
            yourans: fornextround,
            email: someuser
        };
         
        emailjs.send('service_n5uxg3k', 'template_njybsay', templateParams, 'user_n5FL0K33DA7Hgf5IwMbic')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    };    
    return(
        <section className={classes.cicadaReg}>
            <div className={classes.notification}>{someuser}</div>
            <form className={classes.myformfeedback} onSubmit={(e) => e.preventDefault()}>      
            <input name="yourans" type="text" className={classes.feedbackinput} placeholder={props.placeholder} value={ans} onChange={(event)=>{setans(event.target.value)}}/>     
        </form>
        {loading?<Box
                color="#CC6666"
                style={{
                  textAlign: "center",
                  maxWidth: "420px",
                  margin: "50px auto",
                  marginTop: "0px",
                }}
              >
                <CircularProgress color="inherit" />
              </Box> :<div style={{textAlign:'center',maxWidth:'420px',margin:'50px auto',marginTop:'10px'}}>
            <button className={classes.btn} onClick={updatedatabase} >Submit</button>
        </div>}
        {message.length !==0 ?<div className={classes.notification}>{message}</div>:null} 
       </section>
    )
}

export default Rounds;
 