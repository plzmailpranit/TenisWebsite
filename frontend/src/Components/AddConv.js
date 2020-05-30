import React, { Component } from "react";
class AddConv extends Component {

    constructor() {
        super();

        this.state = {
            Ranking: false,
            confirmationCode: '',
            firstName: '',
            lastName: '',
            legueId: ''

        }

        this.confirmationCode = this.confirmationCode.bind(this);
        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.InsertCode = this.InsertCode.bind(this);
        this.legueId = this.legueId.bind(this);
        this.Ranking = this.Ranking.bind(this);
    }
    handleCheckedChange = e => {
        this.setState(prevState => ({ Ranking: !prevState.Ranking }));
    };
    confirmationCode(event) {
        this.setState({ confirmationCode: event.target.value })
    }
    firstName(event) {
        this.setState({ firstName: event.target.value })
    }
    lastName(event) {
        this.setState({ lastName: event.target.value })
    }
    legueId(event) {
        this.setState({ legueId: event.target.value })
    }
    Ranking(event) {
        this.setState({ Ranking: event.target.value })
    }

    InsertCode(event) {

        alert(this.match);
        fetch('https://localhost:5001/api/v1/code/AddNewCompetitior', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },

            body: JSON.stringify({
                confirmationCode: this.state.confirmationCode,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                legueId: this.state.legueId,
                Ranking: this.state.Ranking,
            })

        }).then((status) => status.json())
            .then((Result) => {
                if (Result.status == 'Succes') {
                    alert('Dodano pomyslnie')
                    this.props.history.push("/");
                }
                else {
                    alert('Taki kod juz nadano...')
                }
            }
            )

    }
    render() {
        const { Ranking } = this.state;
        window.getCookie = function (name) {
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
        }
        return (

            <form onSubmit={this.InsertCode} class="form-box__form form" >
                <div >
                    <h2 class="form-box__title">Dodawanie kodu:</h2>
                    <input class="feedback-input" onChange={this.firstName} type="firstName" placeholder="firstName" title="Podaj imie" required />
                    <input class="feedback-input" onChange={this.lastName} type="lastName" id="lastName" placeholder="Nazwisko" title="Podaj nazwisko" required />
                    <input class="feedback-input" onChange={this.legueId} type="legueId" placeholder="Liga" title="Liga gracza" required />
                    <input class="feedback-input" onChange={this.confirmationCode} type="text" placeholder="Kod dostępu" required />
                    <label className="radioRank"> Ranking:
                    <input className="checkboxRank"
                            type="checkbox"
                            checked={Ranking}
                            onChange={this.handleCheckedChange}
                            id="agreement-checkbox"
                        />
                    </label>
                    <div class="addcode">
                        <button  >Przypisz kod</button>
                    </div>
                </div>
            </form >
        );
    }
}

export default AddConv;