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
            matches: [],
        }
        this.generateTableData4 = this.generateTableData4.bind(this);
        this.generateTableData5 = this.generateTableData5.bind(this);
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

        var response4 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/LastMatches', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        var exam4 = await response4.json();
        console.log(exam4);
        this.setState({ matches: exam4, loading: false });

    }

    generateTableData4() {
        let res = [];
        let tableData4 = this.state.matches;
        for (var i = 0; i < tableData4.length; i++) {
            if (tableData4[i].league == false) {
                tableData4[i].league = "Ranking"
                if (tableData4[i].set3 == null) {
                    tableData4[i].set3 = "brak"
                }
                res.push(
                    <tr >
                        <td key={tableData4[i].ownerLastName}>  {tableData4[i].ownerLastName}</td>
                        <td key={tableData4[i].set1}>  {tableData4[i].set1} </td>
                        <td key={tableData4[i].set2}> {tableData4[i].set2} </td>
                        <td key={tableData4[i].set3}> {tableData4[i].set3} </td>
                        <td key={tableData4[i].enemyLasttName}>  {tableData4[i].enemyLasttName} </td>
                    </tr>
                )
            }
            if (i == 6) { break; }
        }

        return res;
    }
    generateTableData5() {
        let res = [];
        let tableData5 = this.state.matches;
        for (var i = 0; i < tableData5.length; i++) {
            if (tableData5[i].league == true) {
                tableData5[i].league = "Liga"

                res.push(
                    <tr >
                        <td key={tableData5[i].ownerLastName}>  {tableData5[i].ownerLastName}</td>
                        <td key={tableData5[i].set1}>  {tableData5[i].set1} </td>
                        <td key={tableData5[i].set2}> {tableData5[i].set2} </td>
                        <td key={tableData5[i].set3}> {tableData5[i].set3} </td>
                        <td key={tableData5[i].enemyLasttName}>  {tableData5[i].enemyLasttName} </td>
                    </tr>
                )
            }
            if (i == 6) {
                break
            }
        }
        return res;
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
                    <div className="col-5">
                        <   img className="zdjecie" src={alfie} alt="" />
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
                    <div className="col-7">

                        <div className="look">
                            <h3>Ostatnie wyniki - liga</h3>
                            <table className="tabela" >
                                <tbody>

                                    {this.generateTableData5()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-5">
                    </div>
                </div>
                <div className="row">

                    <div className="col-5">
                        <div className="look">
                            <h2>Twoje ligi </h2>
                            <br />
                            <p>{this.state.person.leaugeName} - Pozycja nr.{this.state.person.leguePosition} </p>
                            <br />
                            <p>Miejsce w rankingu: {this.state.person.rankingPosition}</p>
                            <br />
                        </div>
                    </div>
                    <div className="col-7">

                        <div className="look">
                            <h3>Ostatnie wyniki - ranking</h3>
                            <table className="tabela" >
                                <tbody>

                                    {this.generateTableData4()}
                                </tbody>
                            </table>

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