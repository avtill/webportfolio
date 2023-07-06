import React from "react";
import jobJson from "../../json/job.json" ;

class Job {
    time: number;
    company: string;
    position: string;
    task: [];
    skill: [];
    constructor(time: number, company: string, position: string, task: [], skill:[]) {
        this.time = time;
        this.company = company;
        this.position = position;
        this.task = task;
        this.skill = skill;
    }
}

const JobSlider=()=>{
    // jobJson.jobs.forEach(element => {
        
    // });
return(
    <div className = "job__sliderbox">
        <div className="job__sliderbox--object">
            <div>
                <p>time</p>
            </div>
            <div>
                <p>company</p>
            </div>
            <div>
                <p>job</p>
            </div>
            <div>
                <p>task</p>
            </div>
            <div>
                <p>skill</p>
            </div>
        </div>
    </div>
)
}
export default JobSlider