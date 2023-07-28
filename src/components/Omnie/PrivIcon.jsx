import React from "react";
import "../../App.css";
import gridIcon from "../../img/grid icon.png";
import textIcon from "../../img/text icon.png"

const PrivIcon =()=> {
    return (
        <>
        <img className="img__priv" src={gridIcon} alt="ikona kafelków" />
        <img className="img__priv" src={textIcon} alt="ikona tekstu" />
        </>
    )
}

export default PrivIcon;