import React from 'react';
import Wrapper from './Wrapper'
class Contact extends React.Component {

    render() {

        return (
            <Wrapper>
                <div className="formularz">
                    <div className="formtitle">
                        Masz pytania? <br />
                        Skontaktuj się z nami!
                    </div>
                    <form>
                        <input name="name" type="text" class="feedback-input" placeholder="Imie" />
                        <input name="email" type="text" class="feedback-input" placeholder="Email" />
                        <textarea name="text" class="feedback-input" placeholder="Twoja wiadomość"></textarea>
                        <input type="submit" value="Wyślij" />
                    </form>
                </div>
            </Wrapper >
        )
    }
}

export default Contact;