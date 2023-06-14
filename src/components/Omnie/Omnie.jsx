import React from "react";
import "../../App.css";
import Job from "./Job";
import Private from "./Private";

const Omnie =()=>{
    return(
        <section >
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