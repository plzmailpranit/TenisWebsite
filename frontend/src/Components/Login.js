import React, { Component } from "react";
import '../styles/Nav.css';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            UserName: '',
            Password: ''
        }

        this.Password = this.Password.bind(this);
        this.UserName = this.UserName.bind(this);
        this.login = this.login.bind(this);
    }

    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }



    async login(event) {

        event.preventDefault();
        await fetch('https://teniswebsite.example.com:5001/api/v1/user/Login', {
            credentials: "include",
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password
            })
        }).then((status) => status.json())

            .then((Result) => {
                if (Result.status == 'Error') {
                    alert('Niepoprawny login lub hasło!');
                }
                else {
                    alert('Zalogowano poprawnie!');
                    window.location.replace("http://teniswebsite.example.com:3000/AppLogged/Profil");
                }
            })
        fetch('https://teniswebsite.example.com:5001/api/v1/user/CheckRole', {
            credentials: "include",
            method: 'get',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            }
        }).then((status) => status.json())
    }

    render() {

        return (

            <form onSubmit={this.login} class="form-box__form form">
                <div class="form-box">
                    <h2 class="form-box__title">Logowanie:</h2>

                    <input class="form__text-input" onChange={this.UserName} type="text" placeholder="Login lub email" required />
                    <input class="form__text-input" onChange={this.Password} type="password" placeholder="Hasło" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />


                </div>
                <div className="login">
                    <button  >Zaloguj się</button>
                </div>
            </form>

        );
    };
}

export default Login;