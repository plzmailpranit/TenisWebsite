import React from 'react'
import Logo from '../images/logoo.png'
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

function NavbarLogged() {

    return (

        <div className="head">
            <section id="nav">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <a class="navbar-brand" href="#s"><img src={Logo} alt="s" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink exact to="/AppLogged/" activeClassName="nav-item nav-link active" class="nav-link">  Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/AppLogged/Info" activeClassName="nav-item nav-link active" class="nav-link">  Informacje</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/AppLogged/Table" activeClassName="nav-item nav-link active" class="nav-link">  Tabele</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/AppLogged/Contact" activeClassName="nav-item nav-link active" class="nav-link">  Kontakt</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/AppLogged/Profil" activeClassName="nav-item nav-link active" class="nav-link"> Profil</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/AppLogged/Results" activeClassName="nav-item nav-link active" class="nav-link">  Wyniki</NavLink>
                            </li>

                        </ul>
                        <form method="get" class="form__button" action="/">
                            <button class="btn"  >Wyloguj się</button>
                        </form>

                    </div>

                </nav>

            </section>

        </div >

    )
}

export default NavbarLogged;