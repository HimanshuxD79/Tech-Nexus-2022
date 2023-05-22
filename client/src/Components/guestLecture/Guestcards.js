import React from "react";
import Guestlecture from "./guestlecture";
import GuestRow2 from "./GuestRow2";
import style from "./Guestcards.module.css";
import kuldeep from "../AboutsUs/images/guest1.jpg";
import muthu from "../AboutsUs/images/guest22.jpg";
import coming from "../AboutsUs/images/comingsoon.jpg";
import hitesh from "../AboutsUs/images/hitesh.jpg";
import kriti from "../AboutsUs/images/kriti.jpg";
import { motion } from "framer-motion";
export default function Guestcards() {
  const content = [
    {
      img: kuldeep,
      name: "Kuldeep Singh",
      para: "Head of XR Practice | Technology Director | Engineering Leader | thinkuldeep.com",
      yt: "https://www.youtube.com/watch?v=PFoIa2KcvzQ",
      ln: "https://www.linkedin.com/in/kuldeep-reck/",
    },
    {
      img: kriti,
      name: "Kirti Pimpalgaonkar",
      para: "Brand Ambassador of Ticker by Finology | Digital Content Creator | Product Head at Finology Ventures Pvt Ltd",
      yt: "https://www.youtube.com/watch?v=AAfI_eDBU-s",
      ln: "https://www.linkedin.com/in/kirti-pimpalgaonkar-6629a8190/?originalSubdomain=in",
    },
    {
      img: muthu,
      name: "Muthu Ramalingam",
      para: "CEO at DexPatent and HelloLeads CRM, Vegan. Come, let us position Trichy on the global map.",
      yt: "https://www.youtube.com/watch?v=BpCUWqgj4cQ",
      ln: "https://www.linkedin.com/in/muthuramalingam/",
    },
    {
      img: hitesh,
      name: "Hitesh Vaidya",
      para: "Director at National Institute of Urban Affairs",
      yt: "https://www.youtube.com/watch?v=wdGBpB5OUuI",
      ln: "https://www.linkedin.com/in/hiteshvaidya/",
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={style.container}
    >
      <div className={style.head}>
        <h1 className={style.heading}>GUEST TALK</h1>
      </div>
      <div className={style.flexcont}>
        <Guestlecture
          img={content[0].img}
          name={content[0].name}
          para={content[0].para}
          yt={content[0].yt}
          ln={content[0].ln}
        />

        <Guestlecture
          img={content[1].img}
          name={content[1].name}
          para={content[1].para}
          yt={content[1].yt}
          ln={content[1].ln}
        />
        <Guestlecture
          img={content[2].img}
          name={content[2].name}
          para={content[2].para}
          yt={content[2].yt}
          ln={content[2].ln}
        />
        <Guestlecture
          img={content[3].img}
          name={content[3].name}
          para={content[3].para}
          yt={content[3].yt}
          ln={content[3].ln}
        />
      </div>

      {/* <div className={style.head2}>
        <h1 className={style.heading2}>E-SPORTS</h1>

      </div>
      <div className={style.row2}>
        <GuestRow2
          name={content[4].name}
          img={content[4].img}
          name={content[4].name}
          yt={content[4].yt}
        />
        <GuestRow2 img={content[5].img} name={content[5].name} />
      </div> */}
    </motion.div>
  );
}
