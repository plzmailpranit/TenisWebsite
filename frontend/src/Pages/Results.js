import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
function Info() {
    return (
        <Wrapper>

            <div className="TitleResults">
                <h2>Oto twój panel wyników</h2>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="RankingResults">
                        <h2>Ranking</h2>
                        TUTAJ TA TABELA<br />
                        POZ | IMIE NAZWISKO | BUTTON WYZWIJ (z oknem modalnym)<br />
                        10 | JAN NOSACZ | BUTTON<br />
                        11 | JANKO NOSACZENKO | BUTTON<br />
                        12 | USER |<br />
                        13 | Enemy |<br />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="LeagueResults">
                        <h2>Liga</h2>
                        <h5>Twoje mecze</h5>
                        <p>np. vs Nosacz i button z oknem modalnym</p><br />
                        Oczywiscie jak w trakcie wpadniesz na koncepcje to rob po swojemu
                    </div>
                </div>
            </div>
        </Wrapper >
    )
}
export default Info;