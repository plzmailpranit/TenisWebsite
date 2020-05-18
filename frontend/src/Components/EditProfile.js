import React, { Component } from "react";
import '../styles/main.css';

class EditProfile extends Component {

    render() {

        return (
            <>
                <form class="form-box__form form">
                    <div class="form-box">
                        <input class="form__text-input" onChange={this.Name} type="text" placeholder="Imię" required />
                        <input class="form__text-input" onChange={this.Surname} type="text" placeholder="Nazwisko" required />
                        <input class="form__text-input" onChange={this.Age} type="text" placeholder="Wiek" />
                        <input class="form__text-input" onChange={this.Code} type="text" placeholder="Kod dostępu" required />
                        <textarea name="text" className="AboutMe" placeholder="O mnie/preferowane godziny gry"></textarea>

                    </div>
                    <div className="Save">
                        <button  >Zapisz dane</button>
                    </div>
                </form>

            </>
        );
    };
}

export default EditProfile;