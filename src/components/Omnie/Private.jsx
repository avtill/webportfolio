import React, { useState } from "react";
import "../../App.css";
import PrivText from "./PrivText";
import PrivIcon from "./PrivIcon";
import PrivGrid from "./PrivGrid";

// do zrobienia jako kafelki z gridem//

const Private =()=> {
    const [grid, setGrid] = useState(true);
        const iconHandlerGrid=()=>{
        setGrid(true)
    }
        const iconHandlerText=()=>{
            setGrid(false)
        }
        return (
        <div className="box__private">
            <h3>Prywatnie</h3>
            <PrivIcon grid={true} iconHandlerGrid={iconHandlerGrid} iconHandlerText={iconHandlerText}/>
           {grid? <PrivGrid /> : <PrivText /> } 
        </div>
)}

export default Private;