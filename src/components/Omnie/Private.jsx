import React from "react";
import "../../App.css";
import PrivText from "./PrivText";

// do zrobienia jako kafelki z gridem//

const Private =()=> {
    return (
            <div>
                <h3>Prywatnie</h3>
               {/* ikony onClick - griid / text */}
               {/* PrivGrid - DOMYŚlny */}
                <PrivText />
            </div>
    )
}

export default Private;