import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Feedback.module.css';
const Feedback = ()=>{

    const [feedbacks,setfeedback] = useState(null);
    useEffect(()=>{
        axios.get('https://queries-8a1ee-default-rtdb.firebaseio.com/feedback.json').then(
            response=>{
                var temp = [];
                for(const obj in response.data){
                    let t = {
                        ...response.data[obj],
                        id:obj
                    }
                    temp.push(t);
                }
                setfeedback(temp);
            }
        )
    },[]);
    return (
        <React.Fragment>
            <div className={classes.heading}>Feedbacks</div>
            {feedbacks && feedbacks.map((obj)=>{
                return (
                    <div key={obj.id} className={classes.container}>
                        <p><strong>Name : </strong>{obj.name}</p>
                        <p><strong>Email: </strong>{obj.email}</p>
                        <p><strong>Feedback : </strong>{obj.feedback}</p>
                        <br/>
                    </div>
                    
                )
            })}
        </React.Fragment>
    )
}

export default Feedback;