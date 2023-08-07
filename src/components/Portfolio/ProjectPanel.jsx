import React, {useState} from "react"; 

const ProjectPanel = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
      <div
        className={`box__portfolio--content ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <a href={project.link} target="_blank">
          <img className="portfolio--miniature" src={project.imgSrc} alt={project.alt} />
        </a>
        <div className={`box__portfolio--techText ${isHovered ? 'visible' : ''}`}>
          <div>
            <ul className="portfolio__list">
              {project.techList.map((tech, index) => <li key={index}>{tech}</li>)}
            </ul>
          </div>
          <div className="box__portfolio--describeText">
            <p className="portfolio__paragraph--text">
              {project.describeText}
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default ProjectPanel;