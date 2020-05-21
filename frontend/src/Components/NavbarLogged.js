import React from 'react'
import Logo from '../images/logoo.png'
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

function NavbarLogged() {

    return (

        <div className="head">
            <section id="nav">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#s"><img src={Logo} alt="s" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/AppLogged/" activeClassName="nav-item nav-link active" className="nav-link">  Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/AppLogged/Info" activeClassName="nav-item nav-link active" className="nav-link">  Informacje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/AppLogged/Table" activeClassName="nav-item nav-link active" className="nav-link">  Tabele</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/AppLogged/Contact" activeClassName="nav-item nav-link active" className="nav-link">  Kontakt</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/AppLogged/Profil" activeClassName="nav-item nav-link active" className="nav-link"> Profil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/AppLogged/Results" activeClassName="nav-item nav-link active" className="nav-link">  Wyniki</NavLink>
                            </li>

                        </ul>
                        <form method="get" className="form__button" action="/">
                            <button className="btn"  >Wyloguj się</button>
                        </form>

                    </div>

                </nav>

            </section>

        </div >

    )
}

export default NavbarLogged;