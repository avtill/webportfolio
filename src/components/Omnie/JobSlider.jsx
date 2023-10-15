import React, {useState} from "react";
import SliderItem from "./SliderItem";
import jobSliderData from "../../json/job.json" ;

const JobSlider=()=>{
    const[currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = jobSliderData.jobs.length;

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex)=> (prevIndex + 1)% totalSlides);
    };
     const handlePrevSlide = () => {
        setCurrentIndex((prevIndex)=> (prevIndex -1 + totalSlides) %totalSlides)
     }
return(
    <div className = "job__sliderbox">
        <div>
            <h4>
                Tam pracowałam:
            </h4>
        </div>
        <button className="button__navigation--slider" onClick={handlePrevSlide}> {'<'} </button>
        <SliderItem data={jobSliderData.jobs[currentIndex]} />
        <button className="button__navigation--slider" onClick={handleNextSlide}> {'>'} </button>
    </div>
)
}
export default JobSlider