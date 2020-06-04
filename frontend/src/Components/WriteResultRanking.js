import React, { Component } from "react";
import '../styles/main.css';

class WriteResult extends Component {
    constructor() {
        super();
        this.state = {
            value: '1',
            enemy: '',
            set1: '',
            set2: '',
            set3: '',
            league: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.enemy = this.enemy.bind(this);
        this.set1 = this.set1.bind(this);
        this.set2 = this.set2.bind(this);
        this.set3 = this.set3.bind(this);
        this.league = this.league.bind(this);
        this.AddResultLeague = this.AddResultLeague.bind(this);
    }

    enemy(event) {
        this.setState({ enemy: event.target.value })
    }
    set1(event) {
        this.setState({ set1: event.target.value })
    }
    set2(event) {
        this.setState({ set2: event.target.value })
    }
    set3(event) {
        this.setState({ set3: event.target.value })
    }
    league(event) {
        this.setState({ league: event.target.value })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    async AddResultLeague(event) {
        event.preventDefault();
        await fetch('https://teniswebsite.example.com:5001/api/v1/Result/AddResult', {
            credentials: "include",
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            },
            body: JSON.stringify({
                enemy: parseInt(this.state.value),
                set1: this.state.set1,
                set2: this.state.set2,
                set3: this.state.set3,
                league: 1
            })
        }).then((status) => status.json())

            .then((Result) => {
                if (Result.status == 'Error') {
                    alert('Niepoprawny wynik');
                }
                else {
                    alert('Dodano wynik!');
                    window.location.replace("http://teniswebsite.example.com:3000/AppLogged/Results");
                }
            })
    }

    render() {

        return (
            <form onSubmit={this.AddResultLeague} class="form-box__form form">
                <h5>Przeciwnik</h5>
                <div class="form-group">
                    <select value={this.state.value} onChange={this.handleChange} class="form-control" id="sel1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="Sety">
                    <h5>Set 1</h5>
                    <p> <b>Wpisujący</b>  <input class="form__text-input" onChange={this.set1} type="text" placeholder="W1 : W2" pattern="[0-7]{1}\:[0-7]{1}" title="Wpisz wynik w postaci TwojeGemy:GemyPrzeciwnika" required />  <b>Przeciwnik</b> </p>
                    <h5>Set 2</h5>
                    <p>  <b>Wpisujący</b>  <input class="form__text-input" onChange={this.set2} type="text" placeholder="W1 : W2" pattern="[0-7]{1}\:[0-7]{1}" title="Wpisz wynik w postaci TwojeGemy:GemyPrzeciwnika" required />  <b>Przeciwnik</b></p>
                    <h5>Set 3</h5>
                    <p> <b>Wpisujący</b>   <input class="form__text-input" onChange={this.set3} type="text" placeholder="W1 : W2" pattern="[0-7]{1}\:[0-7]{1}" title="Wpisz wynik w postaci TwojeGemy:GemyPrzeciwnika" />  <b>Przeciwnik</b></p>
                </div>
                <div className="Save">
                    <button  >Zapisz wynik</button>
                </div>
            </form>
        );
    };
}

export default WriteResult;