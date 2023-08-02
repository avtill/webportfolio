import React from "react";
import "../../App.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import mail from "../../img/Mail.png"

const Kontakt =()=>{
    return(
        <section id="kontakt">
            <h2>
                Kontakt
            </h2>
            <a href="https://github.com/avtill" target="_blank">
                <div className="box__contact--items">
                <img className="icon--contact" src={github} alt="ikona github" />
                <p>GitHub</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/mikulinska/" target="_blank">
                <div className="box__contact--items">
                <img className="icon--contact" src={linkedin} alt="ikona LinkedIn"/>
                <p>LinkedIn</p>
                </div>
            </a>
            <a href="mailto:joanna.malgorzata@gmail.com" target="_blank">
                <div className="box__contact--items">   
                <img className="icon--contact" src={mail} alt="ikona poczty"/>
                <p>Mail</p>
            </div>
            </a>
        </section>
    )
}

export default Kontakt;