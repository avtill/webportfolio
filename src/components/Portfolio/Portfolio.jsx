import React from "react";
import "../../App.css";
import tracker from "../../img/portfolio/timetracker.png";
import bank from "../../img/portfolio/banklp.png";
import dice from "../../img/portfolio/rolldice.png";

const Portfolio=()=>{
    return(
        <section id="portfolio">
            <h2>Potfolio</h2>
            <div className="contener__box__portfolio--items">
                <div className="box__portfolio--content">
                    <a href="https://github.com/avtill/time-tracking-dashboard-main/tree/main/" target="_blank">
                        <img className="portfolio--miniature" src={tracker} alt="miniatura aplikacji time tracker"></img>
                    </a>
                    <div className="box__portfolio--techText">
                       <div> <ul className="portfolio__list">
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS
                                <ul>
                                    <li>RWD</li>
                                    <li>grid</li>
                                </ul>
                            </li>
                            <li>
                                JSON
                            </li>
                        </ul>
                        </div>
                        <div className="box__portfolio--describeText">
                            <p className="portfolio__paragraph--text">
                                Pomysł na projekt zrealizowany ze strony FrontendMentor. Wykonałam go na podstawie dostarczonych szablonów korzystając przede wszystkim z grida oraz właściwości "position". Zachowałam też wygląd mobilny i zadbałam o responsywność strony. Były to moje pierwsze próby korzystania z informacji zaciąganym z plików JSON w projektach. 
                            </p>
                        </div>
                        </div>
                </div>
                <div className="box__portfolio--content">
                    <img className="portfolio--miniature" src={bank} alt="miniatura strony banku"></img>
                    <p className="portfolio__paragraph--text">Bank langing page - opis projektu i technologii</p>
                </div>
                <div className="box__portfolio--content">
                    <img className="portfolio--miniature" src={dice} alt="miniatura aplikacji Roll Dice"></img>
                    <p className="portfolio__paragraph--text">Roll Dice alikacja - stack technologiczny + opisik projektu</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio