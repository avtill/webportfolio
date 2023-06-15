import React from "react";
import "../../App.css";

const Navbar =() => {
    return (
    <nav className="box__nav--navigation">
        <div className="nav__button--emoji">
            <a href="#main"><span className="nav--emoji">👩‍💻</span></a>
        </div>
            <div className="nav__button--nav">
                <a href="#omnie">
                    <span className="span__nav">O mnie</span>
                </a>
            </div>
            <div className="nav__button--nav">
                <a href="#programowanie">
                    <span className="span__nav">Programowanie</span>
                </a>
            </div>
            <div className="nav__button--nav">
                <a href="#portfolio">
                    <span className="span__nav">Portfolio</span>
                </a>
            </div>
            <div className="nav__button--nav">
                <a href="kontakt">
                    <span className="span__nav">Kontakt</span>
                </a>
            </div>
    </nav>)
}

export default Navbar;