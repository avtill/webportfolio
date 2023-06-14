import React from "react";
import "../../App.css";
import JobTable from "./JobTable";

const Job =()=>{
    return (
        <div className="box__section__div--omnie">
            <h3>Zawodowo - Przed programowaniem</h3>
                <article className="box__job--article">
                    <span className="span__job--tekst">
                        Przed programowaniem pracowałam w kilku miejscach i kilku branżach. Próbowałam znaleźć dla siebie miejsce wykorzystując moje talenty i mocne strony. Dopiero programując czuję, że mogę osiągnąć znacznie więcej niż mogłam się spodziewać.
                    </span>
                </article>
            <JobTable />
        </div>
    )
}

export default Job;