import React from "react";
import "../../App.css";
import "./Omnie.css"
import Job from "./Job";
import Private from "./Private";

const Omnie =()=>{
    return(
        <section id="omnie">
            <h2>
                O mnie
            </h2>
            <div className="box__section--omnie">
            <Job />
            <Private />
            </div>
        </section>
    )
}

export default Omnie;