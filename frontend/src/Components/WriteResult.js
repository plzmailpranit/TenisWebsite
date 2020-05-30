import React, { Component } from "react";
import '../styles/main.css';

class WriteResult extends Component {

    render() {

        return (
            <>
                <form class="form-box__form form">
                    <div class="Sety">
                        <h4>Set 1</h4>
                        <p> <b>Wpisujący</b>  <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET 1" required /> : <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET1" required /> <b>Przeciwnik</b> </p>
                        <h4>Set 2</h4>
                        <p>  <b>Wpisujący</b>  <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET 2" required /> : <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET2" required /> <b>Przeciwnik</b></p>
                        <h4>Set 3</h4>
                        <p> <b>Wpisujący</b>   <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET 3" required /> : <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET3" required /> <b>Przeciwnik</b></p>

                    </div>
                    <div className="Save">
                        <button  >Zapisz wynik</button>
                    </div>
                </form>

            </>
        );
    };
}

export default WriteResult;