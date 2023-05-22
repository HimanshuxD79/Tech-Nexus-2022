import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

const Sendemailtoallplayers = (props)=>{
    const letsbeginthehunt = (para)=>{
        axios.get("https://technexuslogin-default-rtdb.firebaseio.com/allcandidate.json")
        .then(response => {
            for(const key in response.data){
                let tln = response.data[key].teamleadername;
                let themessage = "Round 1\
                Good Afternoon agents !!\
                We have got a new case . The details of the case are in this attached to this link:\
                https://drive.google.com/file/d/1UvbgEL5e9M_FNMgS_mCBgSwhConDD9RZ/view?usp=sharing.\
                Join this whatsapp group for any queries.\
                https://chat.whatsapp.com/Ko9If0XqM8k9IYubGkoVMY\
                Type Killer’s name: technexus.in/round1";
                let email = response.data[key].email;
                sendEmail(tln, themessage , email);
            }
        })
    }
    var allemails = ['195578@nith.ac.in','ritukumari5111@gmail.com','anoushkakr45@gmail.com'];
    const checking = (para) =>{
        for(const key in allemails){
            let tln = 'anything you want';
            let themessage = "Round 1\
                Good Afternoon agents !!\
                We have got a new case . The details of the case are in this attached to this link:\
                https://drive.google.com/file/d/1UvbgEL5e9M_FNMgS_mCBgSwhConDD9RZ/view?usp=sharing.\
                Join this whatsapp group for any queries.\
                https://chat.whatsapp.com/Ko9If0XqM8k9IYubGkoVMY\
                Type Killer’s name: technexus.in/round1";
                let email = allemails[key];
            sendEmail(tln, themessage , email);
        }
    }
    const sendEmail = (teamleadername , fornextround , email) => {
        var templateParams = {
            from_name : 'Tech Nexus',
            to_name : teamleadername,
            yourans: fornextround,
            email: email
        };
         
        emailjs.send('service_n5uxg3k', 'template_njybsay', templateParams, 'user_n5FL0K33DA7Hgf5IwMbic')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    };    
    return(
        <button style={{float :'right'}} onClick={checking}>Start cicada</button>
    )
}

export default Sendemailtoallplayers;