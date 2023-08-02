import React, {useState} from 'react';
import movieIcon from "../../img/hobby/movie white.png";
import nutaIcon from "../../img/hobby/nuta white.png";
import diceIcon from "../../img/hobby/dice white.png";
import boardIcon from "../../img/hobby/board white.png";
import gameIcon from "../../img/hobby/game white.png";
import paintIcon from "../../img/hobby/paint white.png";
import goryIcon  from "../../img/hobby/gory white.png"
import hobbyContent from "../../json/hobby.json"
import backArrow from "../../img/backarrow.png"


const PrivGrid = () => {
  const [clickedHobbyContent, setClickedHobbyContent] = useState(null);

  const handleHobbyClick = (content) =>{
    setClickedHobbyContent(content);
  }

  const handleBackHobbyClick =() => {
    setClickedHobbyContent(null);
  }
  return (
    <div className='contener--privGrid'>
      {hobbyContent.map((item,index) =>(
        <div key={index}
        className={`box__privGrid--${item.type}`}
        onClick={() => handleHobbyClick(item.content)}
        >
          {item.type==='img' && (
            <img
            className='img__privGrid--icon'
            src={item.icon}
            alt={`icona ${item.id}`}
            />
            )}
            </div>
      ))}
      {clickedHobbyContent && (
      <div className='tile-content'>
       <div className='content-wrapper'> 
        <div className="img__privGrid--navArrow">
          <img src={backArrow} onClick={handleBackHobbyClick} alt='cofnij' />
        </div>
        <div className='paragraf__privGrid__hobbyContent'>
          <p>{clickedHobbyContent}</p>
          </div>
        </div>
        </div>
        )
        }
    </div>
  )
}

export default PrivGrid
