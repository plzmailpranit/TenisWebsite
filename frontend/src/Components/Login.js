import React, { useCallback, Component } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../Config/base";
import { AuthContext } from "../Config/Auth";
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
    login(event) {
        debugger;
        fetch('http://localhost:5000/api/v1/user/Login', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password
            })
        }).then((status) => status.json())

            .then((Result) => {
                alert(Result.status)
                if (Result.status == 'Error') {
                    alert('Niepoprawny login lub hasło!');
                }
                else {
                    alert('Zalogowano poprawnie!');
                    window.location.replace("http://localhost:3000/AppLogged/Profil");
                }

            })
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
                <div class="login">
                    <button  >Zaloguj się</button>
                </div>
            </form>

        );
    };
}

export default Login;
