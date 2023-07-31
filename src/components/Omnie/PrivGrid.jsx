import React from 'react';
import movieIcon from "../../img/hobby/movie white.png";
import nutaIcon from "../../img/hobby/nuta white.png";
import diceIcon from "../../img/hobby/dice white.png";
import boardIcon from "../../img/hobby/board white.png";
import gameIcon from "../../img/hobby/game white.png";
import paintIcon from "../../img/hobby/paint white.png";
import goryIcon  from "../../img/hobby/gory white.png"

const PrivGrid = () => {
  return (
    <div className='contener--privGrid'>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={movieIcon} alt="ikona filmów"></img>
      </div>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={nutaIcon} alt="ikona nuty"></img>
      </div>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={diceIcon} alt="ikona nuty"></img>
      </div>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={boardIcon} alt="ikona nuty"></img>
      </div>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={gameIcon} alt="ikona nuty"></img>
      </div>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={paintIcon} alt="ikona nuty"></img>
      </div>
      <div className='box__privGrid--empty'></div>
      <div className='box__privGrid--img'>
        <img className="img__privGrid--icon" src={goryIcon} alt="ikona nuty"></img>
      </div>
      <div className='box__privGrid--empty'></div>
    </div>
  )
}

export default PrivGrid