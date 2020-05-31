import React, { Component } from "react";

class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            UserName: '',
            Email: '',
            Password: '',
            Code: '',

        }

        this.UserName = this.UserName.bind(this);
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.register = this.register.bind(this);
        this.Code = this.Code.bind(this);
    }
    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    Code(event) {
        this.setState({ Code: event.target.value })
    }

    async register(event) {
        event.preventDefault();
        await fetch('https://teniswebsite.example.com:5001/api/v1/user/Register', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password,
                Email: this.state.Email,
                Code: this.state.Code,
            })
        }).then((status) => status.json())

            .then((Result) => {

                if (Result.status == 'Succes') {
                    alert('Zarejestrowano pomyslnie')
                    window.location.replace("http://teniswebsite.example.com:3000/");
                }
                else {
                    alert('Nazwa uzytkownika badz email jest juz w bazie')
                }
            }

            )
        debugger;

    }
    render() {

        return (

            <form onSubmit={this.register} class="form-box__form form" >
                <div class="form-box">
                    <h2 class="form-box__title">Rejestracja:</h2>
                    <input class="form__text-input" onChange={this.UserName} type="text" placeholder="Login" pattern="[A-Za-z0-9-]{3,99}" title="Login musi miec przynajmniej 3 znaki" required />
                    <input class="form__text-input" onChange={this.Email} type="e-mail" placeholder="Adres e-mail" pattern="[A-Za-z0-9-.,]{2,}@[A-Za-z0-9-]{2,}[.]{1}[a-zA-Z]{2,}" title="Podaj swój adres email" required />
                    <input class="form__text-input" onChange={this.Code} type="e-mail" placeholder="Kod dostępu" title="Podaj kod dostępu" required />
                    <input class="form__text-input" onChange={this.Password} type="password" id="password" placeholder="Hasło" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />

                    <div class="register">
                        <button  >Stwórz konto</button>
                    </div>
                </div>
            </form >
        );
    }
}

export default SignUp;