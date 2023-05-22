import React from "react";
import Card from "./Card";
import x from "./sponsor.module.css";
import devfolio from "./images/devfolio.png";
import gfg from "./images/gfg.png";
import elm from "./images/elm.png";
import mega from "./images/mega.png";
import ts from "./images/ts.png";
import hm from "./images/hm.png";
import dxt from "./images/Dextrasys.jpg";
import eze from "./images/eze.png";
import Yi from "./images/Yi.png";
import fc from "./images/FC.png";
import cb from "./images/cb.jpeg";
import cdv from "./images/cdv.png";
import time from "./images/time.png";
import acbc from "./images/acbc.png";
import ace from "./images/ace.png";
import pb from "./images/pb.png";
import nb from "./images/nb.png";
import zp from "./images/zdn.png";
import rs from "./images/roosto.png";
import nh from "./images/nh.png";
import ps from "./images/pratyush.png"
import tce from "./images/tce.png"
import iit from "./images/iit.png"
import we from "./images/we.png"
import ns from "./images/ns.png"
import bh from "./images/bh.png"
import chc from "./images/chc.png"
import {motion} from 'framer-motion'

function Sponsor() {
  const details = [
    {
      sponsorName: "Devfolio",
      sponsorType: "(Platform Partner)",
      sponsorLogo: devfolio,
      sponsorLink: "https://devfolio.co/",
    },
    {
      sponsorName: "PrepBytes",
      sponsorType: "(Coding Partner)",
      sponsorLogo: pb,
      sponsorLink: "https://www.prepbytes.com/",
    },
    {
      sponsorName: "Geeks for Geeks",
      sponsorType: "(Programming Partner)",
      sponsorLogo: gfg,
      sponsorLink: "https://www.geeksforgeeks.org/",
    },
    {
      sponsorName: "Elearnmarkets",
      sponsorType: "(Education Partner)",
      sponsorLogo: elm,
      sponsorLink: "https://www.elearnmarkets.com/",
    },
    {
      sponsorName: "Roosto",
      sponsorType: "(Platform Partner)",
      sponsorLogo: rs,
      sponsorLink: "https://www.roostoo.com/",
    },
    {
      sponsorName: "Get Mega",
      sponsorType: "(Gaming Partner)",
      sponsorLogo: mega,
      sponsorLink: "https://www.getmega.com/",
    },
    {
      sponsorName: "TruScholar",
      sponsorType: "(Credential Partner)",
      sponsorLogo: ts,
      sponsorLink: "https://www.truscholar.io/",
    },
    {
      sponsorName: "Dextrasys",
      sponsorType: "(Industrial Training Partner)",
      sponsorLogo: dxt,
      sponsorLink: "https://www.dextrasys.com/",
    },
    {
      sponsorName: "Fanclash",
      sponsorType: "(Esports Partner)",
      sponsorLogo: fc,
      sponsorLink: "https://fanclash.in/",
    },
    {
      sponsorName: "Happy Minds",
      sponsorType: "(Happy Partner)",
      sponsorLogo: hm,
      sponsorLink: "https://linktr.ee/asha_happyminds",
    },
    {
      sponsorName: "Codevita Live",
      sponsorType: "(E-learning Partner)",
      sponsorLogo: cdv,
      sponsorLink: "https://codevita.live/",
    },
    {
      sponsorName: "T.I.M.E. Coaching Institute",
      sponsorType: "(Education Partner)",
      sponsorLogo: time,
      sponsorLink: "https://www.time4education.com/",
    },
    {
      sponsorName: "ACBC Esports",
      sponsorType: "(Streaming Partner)",
      sponsorLogo: acbc,
      sponsorLink: "https://www.youtube.com/channel/UCzCTWUMrBZxyWE_uXl7L4cA",
    },
    {
      sponsorName: "ACE Engineering academy",
      sponsorType: "(Education Partner)",
      sponsorLogo: ace,
      sponsorLink: "https://www.aceenggacademy.com/",
    },
    {
      sponsorName: "Career Hope Classes",
      sponsorType: "(Education Partner)",
      sponsorLogo: chc,
      sponsorLink: "https://www.facebook.com/hopeclassesuna/",
    },
    {
      sponsorName: "Zapden",
      sponsorType: "(IT Partner)",
      sponsorLogo: zp,
      sponsorLink: "https://zapden.com/",
    },
    {
      sponsorName: "Easy Electronics",
      sponsorType: "(Media Partner)",
      sponsorLogo: eze,
      sponsorLink: "https://youtube.com/c/EasyElectronics_25",
    },
    {
      sponsorName: "Youth Incorporated Magazine",
      sponsorType: "(Media Partner)",
      sponsorLogo: Yi,
      sponsorLink: "https://youthincmag.com/",
    },
    {
      sponsorName: "NoticeBard",
      sponsorType: "(Media Partner)",
      sponsorLogo: nb,
      sponsorLink: "https://www.noticebard.com/",
    },
    {
      sponsorName: "Codeboom",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: cb,
      sponsorLink: "https://instagram.com/code_boom?utm_medium=copy_link",
    },
    {
      sponsorName: "NITian's Hub",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: nh,
      sponsorLink: "https://instagram.com/nitians_hub?utm_medium=copy_link",
    },
    {
      sponsorName: "Pratyush Payas",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: ps,
      sponsorLink: "https://instagram.com/pratyush_payas?utm_medium=copy_link",
    },
    {
      sponsorName: "That's called entertainment",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: tce,
      sponsorLink: "https://instagram.com/thatscalledentertainment?utm_medium=copy_link",
    },
    {
      sponsorName: "It Happens In IIT",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: iit,
      sponsorLink: "https://www.instagram.com/ithappensiniit/",
    },
    {
      sponsorName: "Why Engineering",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: we,
      sponsorLink: "https://instagram.com/why_engineering?utm_medium=copy_link",
    },
    {
      sponsorName: "NITIAN SPEAKS",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: ns,
      sponsorLink: "https://instagram.com/nitian_speaks?utm_medium=copy_link",
    },
    {
      sponsorName: "Bhaidi",
      sponsorType: "(Social Media Partner)",
      sponsorLogo: bh,
      sponsorLink: "https://www.youtube.com/c/BHAIDI",
    },
  ];
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <>
      <motion.div initial="hidden"
    animate="visible"
    variants={variants} className={x.bd}>
        <div className={x.backgroundAnim}>
          {/* className={`${styles.description} ${styles.yellow}`} */}
          <div className={`${x.light} ${x.x1}`}></div>
          <div className={`${x.light} ${x.x2}`}></div>
          <div className={`${x.light} ${x.x3}`}></div>
          <div className={`${x.light} ${x.x4}`}></div>
          <div className={`${x.light} ${x.x5}`}></div>
          <div className={`${x.light} ${x.x6}`}></div>
          <div className={`${x.light} ${x.x7}`}></div>
          <div className={`${x.light} ${x.x8}`}></div>
          <div className={`${x.light} ${x.x9}`}></div>
        </div>
        <h1>SPONSORS</h1>
        <div className={x.container}>
          <Card
            name={details[0].sponsorName}
            type={details[0].sponsorType}
            image={details[0].sponsorLogo}
            link={details[0].sponsorLink}
          ></Card>
          <Card
            name={details[1].sponsorName}
            type={details[1].sponsorType}
            image={details[1].sponsorLogo}
            link={details[1].sponsorLink}
          ></Card>
          <Card
            name={details[2].sponsorName}
            type={details[2].sponsorType}
            image={details[2].sponsorLogo}
            link={details[2].sponsorLink}
          ></Card>
          <Card
            name={details[3].sponsorName}
            type={details[3].sponsorType}
            image={details[3].sponsorLogo}
            link={details[3].sponsorLink}
          ></Card>
          <Card
            name={details[4].sponsorName}
            type={details[4].sponsorType}
            image={details[4].sponsorLogo}
            link={details[4].sponsorLink}
          ></Card>
          <Card
            name={details[5].sponsorName}
            type={details[5].sponsorType}
            image={details[5].sponsorLogo}
            link={details[5].sponsorLink}
          ></Card>
          <Card
            name={details[6].sponsorName}
            type={details[6].sponsorType}
            image={details[6].sponsorLogo}
            link={details[6].sponsorLink}
          ></Card>
          <Card
            name={details[7].sponsorName}
            type={details[7].sponsorType}
            image={details[7].sponsorLogo}
            link={details[7].sponsorLink}
          ></Card>
          <Card
            name={details[8].sponsorName}
            type={details[8].sponsorType}
            image={details[8].sponsorLogo}
            link={details[8].sponsorLink}
          ></Card>
          <Card
            name={details[9].sponsorName}
            type={details[9].sponsorType}
            image={details[9].sponsorLogo}
            link={details[9].sponsorLink}
          ></Card>
          <Card
            name={details[10].sponsorName}
            type={details[10].sponsorType}
            image={details[10].sponsorLogo}
            link={details[10].sponsorLink}
          ></Card>
          
          <Card
            name={details[11].sponsorName}
            type={details[11].sponsorType}
            image={details[11].sponsorLogo}
            link={details[11].sponsorLink}
          ></Card>
          <Card
            name={details[12].sponsorName}
            type={details[12].sponsorType}
            image={details[12].sponsorLogo}
            link={details[12].sponsorLink}
          ></Card>
          <Card
            name={details[13].sponsorName}
            type={details[13].sponsorType}
            image={details[13].sponsorLogo}
            link={details[13].sponsorLink}
          ></Card>
          <Card
            name={details[14].sponsorName}
            type={details[14].sponsorType}
            image={details[14].sponsorLogo}
            link={details[14].sponsorLink}
          ></Card>
          <Card
            name={details[15].sponsorName}
            type={details[15].sponsorType}
            image={details[15].sponsorLogo}
            link={details[15].sponsorLink}
          ></Card>
          <h3>MEDIA SPONSORS</h3>
          <Card
            name={details[16].sponsorName}
            type={details[16].sponsorType}
            image={details[16].sponsorLogo}
            link={details[16].sponsorLink}
          ></Card>
          <Card
            name={details[17].sponsorName}
            type={details[17].sponsorType}
            image={details[17].sponsorLogo}
            link={details[17].sponsorLink}
          ></Card>
          <Card
            name={details[18].sponsorName}
            type={details[18].sponsorType}
            image={details[18].sponsorLogo}
            link={details[18].sponsorLink}
          ></Card>
          <Card
            name={details[19].sponsorName}
            type={details[19].sponsorType}
            image={details[19].sponsorLogo}
            link={details[19].sponsorLink}
          ></Card>
          <Card
            name={details[20].sponsorName}
            type={details[20].sponsorType}
            image={details[20].sponsorLogo}
            link={details[20].sponsorLink}
          ></Card>
          <Card
            name={details[21].sponsorName}
            type={details[21].sponsorType}
            image={details[21].sponsorLogo}
            link={details[21].sponsorLink}
          ></Card>
          <Card
            name={details[22].sponsorName}
            type={details[22].sponsorType}
            image={details[22].sponsorLogo}
            link={details[22].sponsorLink}
          ></Card>
          <Card
            name={details[23].sponsorName}
            type={details[23].sponsorType}
            image={details[23].sponsorLogo}
            link={details[23].sponsorLink}
          ></Card>
          <Card
            name={details[24].sponsorName}
            type={details[24].sponsorType}
            image={details[24].sponsorLogo}
            link={details[24].sponsorLink}
          ></Card>
          <Card
            name={details[25].sponsorName}
            type={details[25].sponsorType}
            image={details[25].sponsorLogo}
            link={details[25].sponsorLink}
          ></Card>
          <Card
            name={details[26].sponsorName}
            type={details[26].sponsorType}
            image={details[26].sponsorLogo}
            link={details[26].sponsorLink}
          ></Card>
        </div>
      </motion.div>
    </>
  );
}

export default Sponsor;
