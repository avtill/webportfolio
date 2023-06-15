import React from "react";
import "../../App.css";

const Main =()=>{
    return(
<header className="App-header" id="main">
        <img src="https://avatars.githubusercontent.com/u/114072139?v=4" className="App-logo" alt="profile photo" />
        <h1>
          Joanna Mikulińska
        </h1>
        <a
          className="App-link"
          href="https://github.com/avtill"
          target="_blank"
          rel="github link"
        >
          Profil na GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mikulinska/"
          target="_blank"
          rel="linkedin link"
        >
          Profil na LinkedIn
        </a>
      </header>
    )
}


export default Main