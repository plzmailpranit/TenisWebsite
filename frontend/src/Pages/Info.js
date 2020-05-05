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
                    <img src={BackGround} className="szarepodtlo" alt="" />
                    <p className="tekst">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </Wrapper >
    )
}
export default Info;