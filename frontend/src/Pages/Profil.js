import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
import alfie from '../images/alfie.jpg';
function Info() {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-6">

                    <img className="zdjecie" src={alfie} alt="" />
                    <div className="user">
                        <h2> Alfie Solomons</h2>
                        <h4>34 lata</h4>
                        <h4>1 Liga</h4>
                        <h4>Skills 7/10</h4>
                    </div>

                </div>
                <div className="col-6">
                    <div className="look">
                        <h2>Mecze do rozegrania:</h2>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">

                    <div className="look">
                        <h2>Twoje ligi: </h2>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                </div>
                <div className="col-6">
                    <div className="look">
                        <h2>Wyzwania: </h2>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>

        </Wrapper >
    )
}
export default Info;