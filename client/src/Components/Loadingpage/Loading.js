import React from 'react';
import classes from './Loading.module.css';
import video from './Assets/blendervideo.mp4';
const loading = ()=>{
    return (
        <React.Fragment>
            <div className={classes.videobox}>
                <video 
                src={video} 
                
                autoPlay={true}
                muted
                loop></video>
            </div>
            <div className={classes.wrapper2}>
                <div className={classes.container__top}>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.container__bottom}>
                </div>
            </div>
            <div className={classes.animation__container}>
                <svg viewBox="0 205 600 600">
                <symbol id="text">
                    <text text-anchor="middle" x="50%" y="50%">kainotomia</text>
                </symbol>
                <use xlinkHref="#text" className={classes.text}></use>
                <use xlinkHref="#text" className={classes.text}></use>
                <use xlinkHref="#text" className={classes.text}></use>
                <use xlinkHref="#text" className={classes.text}></use>
                </svg>
            </div>
      </React.Fragment>
    )
}

export default loading;