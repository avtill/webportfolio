import React, { useState } from "react";
import "../../App.css";
import PrivText from "./PrivText";
import PrivIcon from "./PrivIcon";
import PrivGrid from "./PrivGrid";

// do zrobienia jako kafelki z gridem//

const Private =()=> {
    const [grid, setGrid] = useState(true);
        const iconHandler=()=>{
        setGrid(current=> !current)
        console.log(grid)
    }
        return (
        <div>
            <h3>Prywatnie</h3>
            <PrivIcon grid={true} iconHandler={iconHandler}/>
           {grid? <PrivGrid /> : <PrivText /> } 
        </div>
)}

export default Private;