import React from "react";
import style from "./guestRow2.module.css";

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
        <p>{props.content}</p>
      </div>
    </div>
  );
}
