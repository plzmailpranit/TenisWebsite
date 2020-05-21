import React from 'react'
import Logo from '../images/logoo.png'
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Login from './Login'
import SignUp from './SignUp';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "380px",
        height: "70vh",
        border: "10px solid black",
        opacity: "0.67",
        borderRadius: "20px",
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
    }
};
function Navbar() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }


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
                                <NavLink exact to="/" activeClassName="nav-item nav-link active" className="nav-link">  Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Info" activeClassName="nav-item nav-link active" className="nav-link">  Informacje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Table" activeClassName="nav-item nav-link active" className="nav-link">  Tabele</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/Contact" activeClassName="nav-item nav-link active" className="nav-link">  Kontakt</NavLink>
                            </li>
                        </ul>

                        <form className="form-inline">
                            <button onClick={openModal} className="btn" type="button" id="myBtn">Zaloguj się</button>
                        </form>

                    </div>

                </nav>

            </section>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Witaj</h2>
                    <br />
                    <Tabs
                        className="tabsy1"
                    >
                        <TabList className="tabsy">
                            <Tab><div >Logowanie</div></Tab>
                            <Tab>Rejestracja</Tab>
                        </TabList>

                        <TabPanel >
                            <Login />

                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </Tabs>

                </Modal>
            </div >

        </div >

    )
}

export default Navbar;