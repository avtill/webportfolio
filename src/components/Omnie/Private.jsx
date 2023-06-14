import React from "react";
import "../../App.css";

// do zrobienia jako kafelki z gridem//

const Private =()=> {
    return (
            <div>
                <h3>Prywatnie</h3>
                <article className="box__private--article">
                    <span className="span__private--tekst">
                        Jestem osobą kreatywną, angażującą się i otwartą. Lubię gry RPG i z dzieckiem poznaję świat Minecrafta. Mam w sercu góry i lasy.
                    </span>
                    <span className="span__private--tekst">
                        Często organizuję: wyjazdy, zajęcia pozalecyjne, przestrzeń wokół mnie. Lubię mieć wszystko uporządkowane i posegregowane. Może dlatego lubię myśleć o świecie na zasadzie schematów? 
                    </span>
                    <span className="span__private--tekst">
                        Niewiele mam wolnego czasu, ale gdy już nie ma ciekawych seriali i filmów fantasy na Netflixie (i innych pokrewnych portalach streamingowych) to chętnie sięgam po kredki lub farby. Ostatnio testuję możliwości akwareli. Lubię też pisać bajki i opowiadania fantasy. Przez kilka lat śpiewałam też w chórze.
                    </span>
                    <span className="span__private--tekst">
                        W najbliższym czasie chciałabym się zaangażować w pracę najbliższego Ogrodu Jordanowskiego w zakresie gier RPG i tematów związanych z fantastyką. 
                    </span>
                </article>
            </div>
    )
}

export default Private;