import React, { useEffect, useState } from "react";
import styles from "./competitionDetail.module.css";
import tezos from "./assets/sponsors/tezos.png";
import polygon from "./assets/sponsors/polygon.png";
import celo from "./assets/sponsors/celo.png";
import filecoin from "./assets/sponsors/filecoin.png";
import devfolio from "./assets/sponsors/devfolio.png";
import { useParams } from "react-router";
import { slides } from "./assets/data";
import { Markup } from "interweave";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import hackathon_ps from "./assets/pdfs/Vividhata_ps.pdf";
import idea_ps from "./assets/pdfs/IMPRENDITORIA_ps.pdf";

const CompetitionDetail = () => {
  //CAPTURING DATA FROM DATA.JS
  const { id } = useParams();
  console.log(id);
  const {
    heading,
    subHeading,
    image,
    content,
    pdfLink,
    pdfTitle,
    pdfName,
    winner,
    runnerup,
  } = slides[id - 1];

  //
  const [showModal, setShowModal] = useState(false);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div className={styles.posterModal}>
            <button onClick={() => setShowModal(false)}>x</button>
            <img src={image} alt="poster of event" />
          </div>
        </>
      ) : (
        ""
      )}

      {showWinnerModal ? (
        <>
          {id === "7" ? (
            <div
              className={`${styles.posterModal} ${styles.showInResponsive}`}
              style={{ justifyContent: "flex-start", touchAction: "unset" }}
            >
              <button onClick={() => setShowWinnerModal(false)}>x</button>
              <img src={winner} alt="poster of winners" />
              <img src={runnerup} alt="poster of winners" />
            </div>
          ) : (
            ""
          )}

          {id === "5" ? (
            <div
              className={`${styles.posterModal} ${styles.showInResponsive}`}
              style={{ justifyContent: "flex-start" }}
            >
              <button onClick={() => setShowWinnerModal(false)}>x</button>
              <img src={winner} alt="poster of winners" />
              <img src={runnerup} alt="poster of winners" />
            </div>
          ) : (
            ""
          )}

          {id !== "7" && id !== "5" ? (
            <div className={`${styles.posterModal} ${styles.showInResponsive}`}>
              <button onClick={() => setShowWinnerModal(false)}>x</button>
              <img src={winner} alt="poster of winners" />
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {true ? (
        <div id={styles["aboutCompetition"]}>
          <div className={styles.aboutCompetitionHeading}>
            {heading}
            <br /> <p>{subHeading}</p>
          </div>
          <div className={styles.aboutCompetitionDetails}>
            <div className={styles.details}>
              <p>
                <Markup content={content} />
              </p>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.image} onClick={() => setShowModal(true)}>
                <img src={image} alt="delails" />
              </div>
              <div className={styles.discordButton}>
                <a
                  href="https://discord.gg/RejCt7yBef"
                  className="blueButton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                  Join Our Discord
                </a>
                {/* Adding PDF */}
                {true ? (
                  <a
                    href={pdfLink}
                    download={pdfName}
                    className={styles.pdfDownloadBtn}
                  >
                    <u>{pdfTitle}</u>
                  </a>
                ) : (
                  ""
                )}
                {/* HAckathon Problem Statements */}
                {id === "1" ? (
                  <a
                    href={hackathon_ps}
                    download="VIVIDHATA_problem_statements"
                    className={styles.pdfDownloadBtn}
                  >
                    <u>Problem Statements</u>
                  </a>
                ) : (
                  <>
                    {/* Idea Incubation Problem Statements */}

                    {id === "2" ? (
                      <a
                        href={idea_ps}
                        download="IMPRENDITORIA_problem_statements"
                        className={styles.pdfDownloadBtn}
                      >
                        <u>Problem Statements</u>
                      </a>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* REGISTER BUTTON */}

          <div className={styles.button}>
            {id === "1" || id === "2" ? (
              // <div
              //   className="apply-button"
              //   data-hackathon-slug="vividhata-a-blend-of-ideas"
              //   data-button-theme="dark-inverted"
              // ></div>
              <div></div>
            ) : (
              <>
                {/* BGMI */}
                {id === "7" ? (
                  <a
                    href="https://zapden.com/tournament/61af51ff27e6637cc44e9c04/details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    REGISTER
                  </a>
                ) : (
                  <>
                    {/* Valo */}
                    {id === "5" ? (
                      <a
                        href="https://beta.fanclash.in/tournament/match-details?matchDetail=%5Bobject%20Object%5D&matchId=61b5af38944f827e94765665"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        REGISTER
                      </a>
                    ) : (
                      <>
                        {/* Crypto */}
                        {id === "4" ? (
                          <a
                            href="https://forms.gle/pNVPVJJdbFp9kobP6"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            REGISTER
                          </a>
                        ) : (
                          <>
                            {/* Coding Compi */}
                            {id === "3" ? (
                              <a
                                href="https://bit.ly/33Ljras"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                REGISTER
                              </a>
                            ) : (
                              <>
                                {/* GIZEM */}
                                {id === "6" ? (
                                  <Link
                                    to={{
                                      pathname: `/gizemregistration`,
                                    }}
                                    rel="noopener noreferrer"
                                  >
                                    REGISTER
                                  </Link>
                                ) : (
                                  ""
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
            {/* For Winners panel */}
            <a href="# " onClick={() => setShowWinnerModal(true)}>
              SEE RESULTS
            </a>
          </div>

          {/* SPONSORS */}

          {id === "1" || id === "2" ? (
            <div className={styles.sponsors}>
              <h4>Gold Sponsor</h4>

              <div className={styles.gold}>
                <a
                  href="https://devfolio.co/home/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={devfolio} alt="" />
                </a>
              </div>
              <h5>Silver Sponsors</h5>
              <div className={styles.silver}>
                <a href="https://tezos.com/" target="_blank" rel="noreferrer">
                  <img src={tezos} alt="" />
                </a>
                <a href="https://filecoin.io/" target="_blank" rel="noreferrer">
                  <img src={filecoin} alt="" />
                </a>
                <a
                  href="https://polygon.technology/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={polygon} alt="" />
                </a>
                <a href="https://celo.org/" target="_blank" rel="noreferrer">
                  <img src={celo} alt="" />
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : null}
    </>
  );
};

export default CompetitionDetail;
