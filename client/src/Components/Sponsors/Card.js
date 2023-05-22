import React from "react";
import y from "./Card.module.css";

function Card(props){
    return(
        <div className={y.pageContent}>
  <div className={y.card}style={{backgroundImage:`url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPositionY:"center"}}>
    <div className={y.content}>
      <h2 className={y.title}>{props.name}</h2>
      <p className={y.copy}>{props.type}</p>
      <a href={props.link} target="_blank" rel="noreferrer"><button className={y.btn}> Website</button></a>
    </div>
  </div>
  </div>
    );
}
export default Card;