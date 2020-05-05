import React, { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Contact from './Pages/Contact';
import Info from './Pages/Info';
import Table from './Pages/Table';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import AppLogged from './AppLogged';
import Profil from './Pages/Profil';
import Results from './Pages/Results';
import NavbarLogged from './Components/NavbarLogged';
import { AuthProvider } from './Config/Auth'
import PrivateRoute from './Config/PrivateRoute';

const App = () => {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)", transitionDuration: "0.0s" },
    enter: { opacity: 1, transform: "translate(0%,0)", transitionDuration: "0.0s" },
    leave: { opacity: 0, transform: "translate(-50%,0)", transitionDuration: "0.0s" }
  });

  return (
    <AuthProvider>
      <Switch>

        <Route path="/AppLogged" component={AppLogged}>

          <div>
            <header>  <NavbarLogged /> </header>
            <main>
              {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props} >
                  <Switch location={item}>
                    <PrivateRoute exact path="/AppLogged/" component={Main} />
                    <PrivateRoute path="/AppLogged/Contact" component={Contact} />
                    <PrivateRoute path="/AppLogged/Info" component={Info} />
                    <PrivateRoute path="/AppLogged/Table" component={Table} />
                    <PrivateRoute path="/AppLogged/Profil" component={Profil} />
                    <PrivateRoute path="/AppLogged/Results" component={Results} />

                  </Switch>
                </animated.div>
              ))}
            </main>
            <footer><Footer /></footer>
          </div >

        </Route>

        <div>
          <header>
            <Navbar />
          </header>
          <main>
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props} >
                <Switch location={item}>
                  <Route exact path="/" component={Main} />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Info" component={Info} />
                  <Route path="/Table" component={Table} />
                </Switch>
              </animated.div>
            ))}
          </main>
          <footer><Footer /></footer>
        </div >

      </Switch >
    </AuthProvider>
  );
}

export default App;
