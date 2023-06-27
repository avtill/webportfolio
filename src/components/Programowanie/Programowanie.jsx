import React from "react";
import "../../App.css";
import ikony from "../../img/ikony.png";
import reactlogo from "../../img/logo192.png";

const Programowanie=()=>{
    return(
        <section id="programowanie">
            <h2>Programowanie</h2>
            <div className="box__section--programowanie">
                <article className="box__programowanie--article">
                    <span className="span__programowanie--text">
                        Pierwsze doświadczenie z programowaniem miałam wieki temu (jeszcze w liceum). Próbowałam moich sił z HTMLem projektując i pisząc szablony na blogi. Gdybym wtedy pociągnęła temat byłabym teraz zupełnie w innym miejscu.
                    </span>
                    <span className="span__programowanie--text">
                        W 2021. postanowiłam znów sięgnąć do tego tematu, ale dopiero w 2022r. rzuciłam się na głęboką wodę i przystąpiłam do bootcampu z SDA. 
                    </span>
                    <span className="span__programowanie--text">
                        Odświeżyłam dawną wiedzę i poznałam zupełnie nowe tematy, które dla mnie były prawdziwym odkryciem. Teraz zdaję sobie sprawę jak wiele fascynujących rzeczy przede mną. 
                    </span>
                    <span className="span__programowanie--text">
                        Jeszcze nie obrałam swojej ścieżki jako programistka. Liczę, że zyskując pierwsze komercyjne doświadczenie i zanurzając się bardziej w ten świat otworzą się przede mną różne drzwi. Z pomocą kolegów z pracy, na pewno uda mi się obrać dobrą drogę dla mnie. Chcę móc rozwijać moje umiejętności i móc dodawać od siebie unikalną wartość płynącą z talentów i doświadczenia.
                    </span>
                </article>
                {/* przygotować i wstawić grafikę */}
                <div className="box__programing__img--icons">
                    <img className="img--icons" src={ikony} alt="języki programowania" />
                    <img className="img--icons" src={reactlogo} alt="ikona Reacta" />
                </div>
            </div>
        </section>
    )
}

export default Programowanie;