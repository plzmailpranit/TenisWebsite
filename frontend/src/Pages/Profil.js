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

class Info extends React.Component {
    constructor() {

        super();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            open: false,
            loading: true,
            person: null,
        }

    }
    async componentDidMount() {
        var response = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/CompetitorPosition', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            }

        })
        var exam = await response.json();
        console.log(exam);
        this.setState({ person: exam, loading: false });
    }

    openModal() {
        this.setState(
            { open: true });
    }

    closeModal() {
        this.setState(
            { open: false });
    }
    render() {
        var subtitle;
        function afterOpenModal() {
            subtitle.style.color = 'black';
        }
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didn't get a person</div>;
        }
        return (
            <Wrapper>
                <div className="row">
                    <div className="col-6">

                        <img className="zdjecie" src={alfie} alt="" />
                        <div className="user">
                            <h2> {this.state.person.firstName} {this.state.person.lastName}</h2>
                            <h4>Wiek (opcjonalnie)</h4>
                            <h4>Dostepność</h4>
                            <br />
                            <form className="form-inline">
                                <button onClick={this.openModal} className="btTn" type="button" id="myBtn">Edytuj profil</button>
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
                            <p>{this.state.person.leaugeName} - Pozycja nr.{this.state.person.leguePosition} </p>
                            <br />
                            <br />
                            <p>Miejsce w rankingu: {this.state.person.rankingPosition}</p>
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
                        isOpen={this.state.open}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
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
}
export default Info;