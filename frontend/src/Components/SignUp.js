import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../Config/base";
 
class SignUp extends Component {
 
    constructor() {
        super();
 
        this.state = {
            UserName: '',
            Email: '',
            Password: ''
        }
 
        this.UserName = this.UserName.bind(this);
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.register = this.register.bind(this);
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
 
    register(event) {
 
        fetch('http://localhost:5000/api/v1/user/Register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                UserName: this.state.UserName,
                Password: this.state.Password,
                Email: this.state.Email
                })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success')
                    this.props.history.push("/");
                else
                    alert('Fail')
            })
    }
    render() {
 
        return (
 
            <form class="form-box__form form" >
                <div class="form-box">
                    <h2 class="form-box__title">Rejestracja:</h2>
                    <input class="form__text-input" onChange={this.UserName} type="text" name="email" placeholder="Login" />
                    <input class="form__text-input" onChange={this.Email} type="e-mail" name="email" placeholder="Adres e-mail" />
                    <input class="form__text-input" onChange={this.Password} type="password" name="password" id="password" placeholder="Hasło" />
 
                    <div class="register">
                        <button onClick={this.register} >Stwórz konto</button>
                    </div>
                </div>
            </form >
        );
    }
}
 
export default SignUp;