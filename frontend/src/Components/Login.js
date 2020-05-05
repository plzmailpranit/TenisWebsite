import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../Config/base";
import { AuthContext } from "../Config/Auth";
import '../styles/Nav.css';

const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/AppLogged/Profil");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    return (

        <form onSubmit={handleLogin} class="form-box__form form">
            <div class="form-box">
                <h2 class="form-box__title">Logowanie:</h2>

                <input class="form__text-input" type="e-mail" name="email" placeholder="Adres e-mail" />
                <input class="form__text-input" type="password" name="password" id="password" placeholder="Hasło" />


            </div>
            <div class="login">
                <button >Zaloguj się</button>
            </div>
        </form>

    );
};


export default withRouter(Login);