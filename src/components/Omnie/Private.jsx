import React from "react";
import "../../App.css";
import PrivText from "./PrivText";
import PrivIcon from "./PrivIcon";

// do zrobienia jako kafelki z gridem//

const Private =()=> {
    return (
            <div>
                <h3>Prywatnie</h3>
                <PrivIcon />
               {/* ikony onClick - griid / text */}
               {/* PrivGrid - DOMYŚlny */}
                <PrivText />
            </div>
    )
}

export default Private;