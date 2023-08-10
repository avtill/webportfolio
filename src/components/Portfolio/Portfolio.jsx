import React, {useState} from "react";
import "../../App.css";
import ProjectPanel from "./ProjectPanel";
import portfolioItems from "../../json/portfolio.json";

const Portfolio=()=>{
    const [hoveredDiv, setHoveredDiv] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredDiv(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredDiv(null);
    };

    return(
 <section id="portfolio">
      <h2>Potfolio</h2>
      <div className="contener__box__portfolio--items">
        {portfolioItems.map((project, index) => (
          <ProjectPanel
            key={index}
            project={project}
            isHovered={hoveredDiv === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <a href="https://github.com/avtill" target="_blank">Więcej projektów na moim GITHUBIE</a>
    </section>
    )
}

export default Portfolio