import React from "react";
import "../../App.css";

// do przerobienia na slajder?//

const JobTable =()=>{
    return (
        <table className="table__job">
       <thead>
        <tr>
            <th>lata</th>
            <th>pracodawca</th>
            <th>stanowisko</th>
            <th>co robiłam?</th>
            <th>czego się nauczyłam?</th>
        </tr>
        </thead>
        <tr>
            <td>2021-teraz</td>
            <td>Zespół Szkół im. Piotra Wysockiego w Warszawie</td>
            <td>referent ds. obsługi sekretariatu</td>
            <td>
                <ul>
                    <li>
                        obieg pism urzędowych
                    </li>
                    <li>
                        organizacja egzaminów maturalnych i zawodowych
                    </li>
                    <li>
                        pomoc przy rekturacji
                    </li>
                    <li>
                        obsługa spraw uczniowskich
                    </li>
                    <li>i inne</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        <strong>dobra organizacja pracy</strong>
                    </li>
                    <li>
                        komunikacji zgodniej z procedurami
                    </li>
                    <li>
                        <strong>działanie pod presją czasu</strong>
                    </li>
                    <li>
                        formułowania pism urzędowych
                    </li>
                    <li>
                        czytania i archiwizowania dokumentacji
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>2016-2021</td>
            <td>AccorHotels</td>
            <td>Pracownik recepcji i rezerwacji</td>
            <td>
                <ul>
                    <li>
                        wykonywanie i obsługa rezerwacji
                    </li>
                    <li>
                        przyjmowanie gości
                    </li>
                    <li>
                        dbanie o przyjemny pobyt gości
                    </li>
                    <li>
                        byłam odpowiedzialna za programy Heartist oraz ACDC w hotelu
                        </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        <strong>proaktywnej postawy</strong>
                    </li>
                    <li>
                        komunikacji z trudnymi gośćmi
                    </li>
                    <li>
                        <strong>dobrej ogranizacji pracy</strong>
                    </li>
                    <li>
                        działania pod presją czasu
                    </li>
                    <li>
                        <strong>przewidywania sytuacji problematycznych i radzenia sobie z nimi</strong>
                    </li>
                    <li>
                        swobodnego rozmawiania i żartowania po angielsku
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>2016</td>
            <td>Edipress</td>
            <td>Specjalista Social Media</td>
            <td>
                <ul>
                    <li>
                        wrzucanie postów na Facebooku
                    </li>
                    <li>
                        przygotowanie i publikowanie memów
                    </li>
                    <li>
                        interpretowanie danych z analityki Facebooka
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        <strong>czytania i interpretowania danych/zasiągów</strong>
                    </li>
                    <li>
                        przygotowania memów
                    </li>
                    <li>
                        przedstawiania w sposób "klikalny" treści na social mediach
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>2010-2016</td>
            <td>Eniro Polska</td>
            <td>Specjalista ds. reklamy katalogowej i internetowej</td>
            <td>
                <ul>
                    <li>
                        rejestrowanie umów szwedzkich sprzedawców
                    </li>
                    <li>
                        uzupałenianie wizytówek firm
                    </li>
                    <li>
                        zakładanie profili firm na Facebooku
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        <strong>nastawienia "proklient"</strong>
                    </li>
                    <li>
                        obróbki graficznej zdjęć
                    </li>
                    <li>
                        dokładnego czytania i interpretowania dokumentów
                    </li>
                    <li>
                        marketingowego formułowania tekstów
                    </li>
                </ul>
            </td>
        </tr>
    </table>
    )
}

export default JobTable;