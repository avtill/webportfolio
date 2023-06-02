import React from "react";

const Navbar =() => {
    return
    <nav>
        <div className="nav__button--emoji">
            <button>👩‍💻</button>
        </div>
        <div className="nav__button--navigation">
            <button className="nav__button--nav">
                O mnie
            </button>
            <button className="nav__button--nav">
                Programowanie
            </button>
            <button className="nav__button--nav">
                Portfolio
            </button>
            <button className="nav__button--nav">
                Kontakt
            </button>
        </div>
    </nav>
}

export default Navbar;