import React from 'react';
import Wrapper from './Wrapper'
import BackGround from '../images/podtło.png'
import kort from '../images/korty z-ce.jpg'
import '../styles/main.css';
function Info() {
    return (
        <Wrapper>
            <div class="row">
                <div class="col-5">
                    <p className="tytul">Informacje </p>
                    <br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.74526864324!2d18.117495708334832!3d50.431963053420056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47110588ed87522b%3A0x9313d9003d5aa90a!2s47-330%20Zdzieszowice!5e0!3m2!1spl!2spl!4v1586171552298!5m2!1spl!2spl" width="600" height="450" frameborder="0" className="imageinfo" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                    <br /><br />
                    <p className="adres">Adres: <br />47-330 Zdzieszowice <br /> ul. Rozwadzka, koło Stadionu</p>
                </div>
                <div class="col-5">

                    <p className="tekst">
                        <h2>Regulamin:</h2>
                        <p>1. Graj jak Pablo</p>
                        <p>2. Nie serwuj za mocno (dziury porobisz)</p>
                        <p>3. Dopuszczalna waga gracza 100kg (dziury porobisz grubasie)</p>
                        <p>4. Sprzataj po sobie</p>
                        <p>5. Nie wywalaj pilek za plot Czarek</p>
                        <p>6. Jak cos zepsujesz zglos (i see u (o_o) )</p>
                        <p>7. Zarzadca ma zawsze racje</p>
                        <p>8. Jesli zarzadca nie ma racji patrz na pkt 7</p>
                        <p>9. Regulamin jest kozacki, jak nie pasuje to ...</p>
                        <p>10. Have Fun!</p>
                    </p>
                </div>

            </div>
        </Wrapper >
    )
}
export default Info;