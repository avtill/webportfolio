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
                    <img className="portfolio--miniature" src={tracker} alt="miniatura aplikacji time tracker"></img>
                    <p className="portfolio__paragraph--text">Time tracker - opis technologii użytych + projektu</p>
                </div>
                <div>
                    <img className="portfolio--miniature" src={bank} alt="miniatura strony banku"></img>
                    <p className="portfolio__paragraph--text">Bank langing page - opis projektu i technologii</p>
                </div>
                <div>
                    <img className="portfolio--miniature" src={dice} alt="miniatura aplikacji Roll Dice"></img>
                    <p className="portfolio__paragraph--text">Roll Dice alikacja - stack technologiczny + opisik projektu</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio