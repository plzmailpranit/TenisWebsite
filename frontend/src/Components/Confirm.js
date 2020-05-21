import React, { Component } from "react";
import '../styles/main.css';


function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
var token = GetURLParameter('Token');
var userName = GetURLParameter('userName');
class Confirm extends Component {
    state = {
        minutes: 0,
        seconds: 10,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="Confirm">
                <h2 className="tytul">Twoje konto zostało aktywowane pomyślnie!!</h2>
                <br />
                <br />
                <h3>Za chwile zostaniesz przeniesiony na strone główną</h3>
                <br />
                {minutes === 0 && seconds === 0
                    ? window.location.replace("http://localhost:3000/")
                    : <h1> {seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>

        );
    };
}

export default Confirm;