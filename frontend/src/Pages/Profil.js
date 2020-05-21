import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
import alfie from '../images/user.png';
import Modal from 'react-modal'
import EditProfile from '../Components/EditProfile';

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
function Info() {

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Wrapper>
            <div className="row">
                <div className="col-6">

                    <img className="zdjecie" src={alfie} alt="" />
                    <div className="user">
                        <h2> Imie i Nazwisko</h2>
                        <h4>Wiek (opcjonalnie)</h4>
                        <h4>Dostepność</h4>
                        <br />
                        <form className="form-inline">
                            <button onClick={openModal} className="btn" type="button" id="myBtn">Edytuj profil</button>
                        </form>
                    </div>

                </div>
                <div className="col-6">
                    <div className="look">
                        <h2>Ostatnie wyniki</h2>
                        <br />
                        <p>6:3, 6:4 vs Nosacz (Liga)</p>
                        <br />
                        <p>6:3, 6:4 vs Nosacz (Liga)</p>
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
                        <p>3 Liga (poz. 6)</p>
                        <br />
                        <br />
                        <p>13 miejsce w rankingu</p>
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
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Edytuj swój profil</h2>

                    <EditProfile />

                </Modal>
            </div >
        </Wrapper >
    )
}
export default Info;