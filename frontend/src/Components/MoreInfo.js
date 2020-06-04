import React, { Component } from "react";
import '../styles/main.css';

class MoreInfo extends Component {

    render() {

        return (
            <>
                <div class="Info">
                    <h5><b>Imie:</b> Pablo</h5>
                    <h5><b>Nazwisko:</b> Pablowsky</h5>
                    <h5><b>Wiek:</b> 38</h5>
                    <h5><b>Dyspozycyjność:</b> Pon-Pt po poludniu<br />
                    Sob-Nd Rano</h5>
                </div>

            </>
        );
    };
}

export default MoreInfo;