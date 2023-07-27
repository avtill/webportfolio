import React from "react";
import "../../App.css";

const MainLink = ()=>{
    return(
<div>
            <div className="box__main--likbutton">
              <a
            className="App-link"
            href="https://github.com/avtill"
            target="_blank"
            rel="github link"
          >
            Profil na GitHub
              </a>
            </div>
            <div className="box__main--likbutton">
              <a
            className="App-link"
            href="https://www.linkedin.com/in/mikulinska/"
            target="_blank"
            rel="linkedin link"
          >
            Profil na LinkedIn
              </a>
            </div>
          </div>
    )
}

export default MainLink