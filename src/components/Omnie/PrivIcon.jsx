import React from "react";
import "../../App.css";
import gridIcon from "../../img/grid icon.png";
import textIcon from "../../img/text icon.png"

const PrivIcon =({setGrid, iconHandlerGrid, iconHandlerText})=> {

    return (
        <div className="box__priv--navIcons">
        <img className="img__priv" src={gridIcon} alt="ikona kafelków" onClick={iconHandlerGrid}/>
        <img className="img__priv" src={textIcon} alt="ikona tekstu" onClick={iconHandlerText}/>
        </div>
    )
}

export default PrivIcon;