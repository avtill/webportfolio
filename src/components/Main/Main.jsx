import React from "react";
import "../../App.css";
import MainLink from "./MainLink";

const Main =()=>{
    return(
<section  id="main">
       <div className="App-header"> 
          <img src="https://avatars.githubusercontent.com/u/114072139?v=4" className="App-logo" alt="profile photo" />
          <h1>
            Joanna Mikulińska
          </h1>
          <h4>
            Frontend Developer
          </h4>
          {/* <MainLink /> */}
        </div>
      </section>
    )
}


export default Main