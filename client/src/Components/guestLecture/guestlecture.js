import React from "react";
import style from "./guest.module.css";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Guestlecture(props) {
  return (
    <div className={style.Item} style={{ width: props.Row2 + "%" }}>
      <div
        className={style.Bg}
        style={{ backgroundImage: "url(" + props.img + ")" }}
      ></div>

      <div className={style.Year}>{/* <p >{props.year}</p> */}</div>

      <div className={style.Content}>
        <h1>{props.name}</h1>
        <p>{props.para}</p>
        <a href={props.yt} target="_blank" className={style.guestSocials}>
          <FaYoutube />
        </a>
        <a href={props.ln} target="_blank" className={style.guestSocials}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
