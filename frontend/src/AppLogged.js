import React, { useContext } from 'react';
import './App.css';
import NavbarLogged from './Components/NavbarLogged';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Contact from './Pages/Contact';
import Info from './Pages/Info';
import Table from './Pages/Table';
import Profil from './Pages/Profil';
import Results from './Pages/Results';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

const AppLogged = () => {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translate(100%,0)", transitionDuration: "0.6s" },
        enter: { opacity: 1, transform: "translate(0%,0)", transitionDuration: "0.6s" },
        leave: { opacity: 0, transform: "translate(-50%,0)", transitionDuration: "0.6s" }
    });

    return (

        <div>
            <header>  <NavbarLogged /> </header>
            <main>
                {transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={props} >
                        <Switch location={item}>
                            <Route exact path="/" component={Main} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Info" component={Info} />
                            <Route path="/Table" component={Table} />
                            <Route path="/Profil" component={Profil} />
                            <Route path="/Results" component={Results} />
                        </Switch>
                    </animated.div>
                ))}
            </main>
            <footer><Footer /></footer>
        </div >

    );
}

export default AppLogged;
