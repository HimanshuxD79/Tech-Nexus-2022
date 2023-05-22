import React, { useState , useEffect} from 'react';
import classes from './Rounds.module.css';
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import emailjs from 'emailjs-com';
import { singleDivModeExecute } from 'react-tsparticles';
import { slideInRight } from 'react-animations';
import axios from 'axios';

const Rounds = (props)=>{
    const [ans,setans]  = useState('');
    const [streetno , setstreetno] = useState('');
    const [houseno, sethouseno] = useState('');
    const [location , setlocation] = useState('');
    const [pin, setpin] = useState('');
    const [someuser, setsomeuser] = useState('');
    const [message ,setmessage] = useState('');
    const [loading , setloading] = useState(false);
    const [emailcontent ,setemailcontent] = useState('');
    const [correctstreetno , setcorrectstreetno] = useState('');
    const [correcthouseno , setcorrecthouseno] = useState('');
    const [correctlocation , setcorrectlocation ] =  useState('');
    const [correctpin , setcorrectpin ] =  useState('');
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== null) setsomeuser(currentUser.email);
        else {
          setsomeuser(null);
        }
      });

    useEffect(()=>{
        axios.get('https://technexuslogin-default-rtdb.firebaseio.com/ansdata.json')
        .then(response => {
            let thouse,tstreet,tpin,tlocation, temailcontent;
            for(const key in response.data){
                if(parseInt(props.r) === response.data[key].Round){
                    thouse = response.data[key].houseno;
                    tstreet = response.data[key].streetno;
                    tlocation = response.data[key].location;
                    tpin = response.data[key].pin;
                    temailcontent = response.data[key].emailcontent;
                    break;
                }
            }
            setcorrecthouseno(thouse);
            setcorrectstreetno(tstreet);
            setcorrectlocation(tlocation);
            setcorrectpin(tpin);
            setemailcontent(temailcontent);
        })
        .catch(err => console.log(err));
    },[])
    console.log(emailcontent, 'emailcontent');
    console.log(ans,'ans');
    const updatedatabase = (para)=>{
        setmessage('');
        if(houseno.length === 0 || streetno.length === 0 || pin.length === 0 || location.length === 0){
            setmessage('Please enter answer!!!');
            return;
        }
        setmessage('');
        setloading(true);
        console.log(houseno);
        console.log(correcthouseno);
        
        if(parseInt(houseno) !== correcthouseno || parseInt(streetno) !== correctstreetno || parseInt(pin) !== correctpin || location.trim().toLowerCase() !== correctlocation.trim().toLowerCase()){
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
            if(foundid.length === null){
                setmessage('You have not registered for the quiz');
                setloading('false');
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
            <div style={{textAlign: 'center',color:'white',fontSize:'35px'}}>{someuser}</div>
        <form className={classes.myformfeedback}>      
            <input name="streetno" type="text" className={classes.feedbackinput} placeholder="Street Number" value={streetno} onChange={(event)=>{setstreetno(event.target.value)}}/>
            <input name="houseno" type="text" className={classes.feedbackinput} placeholder="House Number" value={houseno} onChange={(event)=>{sethouseno(event.target.value)}}/>
            <input name="location" type="text" className={classes.feedbackinput} placeholder="Location" value={location} onChange={(event)=>{setlocation(event.target.value)}}/>
            <input name="pin" type="text" className={classes.feedbackinput} placeholder="Pin" value={pin} onChange={(event)=>{setpin(event.target.value)}}/>     
        </form>
        <div style={{textAlign:'center',maxWidth:'420px',margin:'50px auto',marginTop:'10px'}}>
            <button className={classes.btn} onClick={updatedatabase} >Submit</button>
        </div>
        <div style={{textAlign: 'center',color:'white',fontSize:'24px'}}>{message}</div>
       </section>
    )
}

export default Rounds;