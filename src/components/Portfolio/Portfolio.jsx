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
                        <div>
                            <ul className="portfolio__list">
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
                    <a href="https://github.com/sabiku85/easybank-lp" target="_blank">
                        <img className="portfolio--miniature" src={bank} alt="miniatura strony banku"></img>
                    </a>
                    <div className="box__portfolio--techText">
                        <div>
                            <ul className="portfolio__list">
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>SASS
                                    <ul>
                                        <li>RWD</li>
                                        <li>grid</li>
                                        <li>flexbox</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="box__portfolio--describeText">
                            <p className="portfolio__paragraph--text">
                                Pomysł na projekt zrealizowany ze strony FrontendMentor w małej dwuosobowej grupie w celu przećwiczenia umiejętności twardych oraz miękkich. Dzięki współpracy z innym programistą ugruntowałam sobie wiedzę z GITa oraz nauczyłam się korzystać z SASSa. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box__portfolio--content">
                    <a href="https://github.com/avtill/rolladice" target="_blank">  
                        <img className="portfolio--miniature" src={dice} alt="miniatura aplikacji Roll Dice"></img>
                    </a>
                    <div className="box__portfolio--techText">
                        <div>
                            <ul className="portfolio__list">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS (RWD)</li>
                                <li>MUI</li>
                            </ul>
                        </div>
                        <div className="box__portfolio--describeText">
                            <p className="portfolio__paragraph--text">
                                To pierwszy taki pomysł na aplikację, który miałam i który chcę doszlifować dość solidnie. Póki co jest to bardzo prosty algorytm do wyliczania wieloktornych rzutów nietypowymi kośćmi (potrzebny w grach typu RPG). Chciałabym rozwinąć podawanie wyników oraz możliwość zapisu wyników po logowaniu. Mam wrażenie, że sporo chciałabym osiągnąć tą aplikacją dlatego zrobiłam jej podstawową funkcjonalność na ten czas i odstawiłam projekt na półkę. Chciałam się skupić na podszlifowaniu umiejętności nim wrócę i zagłębię się w funkcjonalności, na których mi najbardziej zależy.
                            </p>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio