import React from "react";
import classes from "./Text.module.css";

function Text() {
  return (
    <div className={classes.animation__container}>
      <svg viewBox="0 205 600 600">
        <symbol id="text">
          <text textAnchor="middle" x="50%" y="50%">
            KAINOTOMIA
          </text>
        </symbol>
        <use xlinkHref="#text" className={classes.text}></use>
        <use xlinkHref="#text" className={classes.text}></use>
        <use xlinkHref="#text" className={classes.text}></use>
        <use xlinkHref="#text" className={classes.text}></use>
      </svg>
    </div>
  );
}

export default Text;
