import React from "react";
import "../../App.css";
import JobTable from "./JobTable";

const Job =()=>{
    return (
        <div className="box__section__div--omnie">
            <h2>Zawodowo - Przed programowaniem</h2>
                <article>
                    Przed programowaniem pracowałam w kilku miejscach i kilku branżach. Próbowałam znaleźć dla siebie miejsce wykorzystując moje talenty i mocne strony. Dopiero programując czuję, że mogę osiągnąć znacznie więcej niż mogłam się spodziewać.
                </article>
            <JobTable />
        </div>
    )
}

export default Job;