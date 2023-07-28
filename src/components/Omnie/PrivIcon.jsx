import React from "react";
import "../../App.css";
import gridIcon from "../../img/grid icon.png";
import textIcon from "../../img/text icon.png"

const PrivIcon =({setGrid, iconHandler})=> {

    return (
        <>
        <img className="img__priv" src={gridIcon} alt="ikona kafelków" onClick={iconHandler}/>
        <img className="img__priv" src={textIcon} alt="ikona tekstu" onClick={iconHandler}/>
        </>
    )
}

export default PrivIcon;