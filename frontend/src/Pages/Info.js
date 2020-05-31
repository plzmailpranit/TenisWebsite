import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
function Info() {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-5">
                    <p className="tytul">Informacje </p>
                    <br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.74526864324!2d18.117495708334832!3d50.431963053420056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47110588ed87522b%3A0x9313d9003d5aa90a!2s47-330%20Zdzieszowice!5e0!3m2!1spl!2spl!4v1586171552298!5m2!1spl!2spl" width="600" height="450" frameBorder="0" className="imageinfo" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                    <br /><br />
                    <p className="adres">Adres: <br />47-330 Zdzieszowice <br /> ul. Rozwadzka, koło Stadionu</p>
                </div>
                <div className="col-5">

                    <p className="tekst">
                        <h2>Regulamin:</h2>
                        <p>1. Zarządcą strony jak i kortów jest Stowarzyszenie Tenisa Zdzieszowice.</p>
                        <p>2. Użytkownikami kortów tenisowych mogą być wyłącznie osoby, które zaakceptowały niniejszy regulamin.</p>
                        <p>3. Odwołanie rezerwacji powinno nastąpić nie później niż 5 godzin przed umówionym spotkaniem.</p>
                        <p>4. Zachowaj porządek.</p>
                        <p>5. Gracze zobowiązani są do gry w obuwiu o podeszwie przystosowanej dla kortu tenisowego.</p>
                        <p>6. W razie dostrzeżenia nieprawidłowości bądź w przypadku spowodowania szkody należy niezwłocznie zgłosić to zarządowi kortów.</p>
                        <p>7. Należy zachować się w taki sposób, aby nie zakłócać gry pozostałym uczestnikom.</p>
                        <p>8. Po zakończonej grze należy </p>
                        <p>9. W razie nie przestrzegania regulaminu, zarządca uprzywilejowany jest do wyproszenia takich osób lub pociągnąć też je do poniesienia kary w postaci kosztów lub naprawienia szkody.</p> 
                        <p>10. Skargi oraz wnioski można składać zarządcy obiektu lub członkom do tego przeznaczym.</p>
                    </p>
                </div>

            </div>
        </Wrapper >
    )
}
export default Info;