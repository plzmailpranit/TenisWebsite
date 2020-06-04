import React, { Component } from "react";
import '../styles/main.css';

class WriteResult extends Component {

    render() {

        return (
            <>
                <form class="form-box__form form">
                    <h5>Przeciwnik</h5>
                    <div class="form-group">
                        <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div class="Sety">
                        <h5>Set 1</h5>
                        <p> <b>Wpisujący</b>  <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET 1" required /> : <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET1" required /> <b>Przeciwnik</b> </p>
                        <h5>Set 2</h5>
                        <p>  <b>Wpisujący</b>  <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET 2" required /> : <input class="form__text-input" onChange={this.Name} type="text" placeholder="SET2" required /> <b>Przeciwnik</b></p>
                        <h5>Set 3</h5>
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