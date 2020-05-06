import React from 'react';
import '../styles/footer.css';
import logo from '../images/logoswsc.png'

function Footer() {
    return (
        <div className="row">
            <div className="col">
                <div className="foot">
                    <img className="logoswsc" src={logo} alt="" />
                    <div className="end">
                        <br />
                        <p>Copyright © Sports-Web Services Creators</p>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;