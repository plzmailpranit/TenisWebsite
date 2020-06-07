import React from 'react';
import Wrapper from './Wrapper'
import Modal from 'react-modal'
import '../styles/main.css';
import WriteResult from '../Components/WriteResult'
import WriteResultRanking from '../Components/WriteResultRanking'
import MoreInfo from '../Components/MoreInfo'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "450px",
        height: "65vh",
        border: "10px solid black",
        opacity: "0.67",
        borderRadius: "20px",
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
    }
};
const customStyles2 = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
        height: "50vh",
        border: "10px solid black",
        opacity: "0.67",
        borderRadius: "20px",
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
    }
};
class Results extends React.Component {
    constructor() {

        super();
        this.state = {
            open: false,
            open2: false,
            open3: false,
            loading: true,
            person: [],
            person2: [],
            person3: [],
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal2 = this.openModal2.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
        this.openModal3 = this.openModal3.bind(this);
        this.closeModal3 = this.closeModal3.bind(this);
        this.generateTableData1 = this.generateTableData1.bind(this);
        this.generateTableData2 = this.generateTableData2.bind(this);
    }

    async componentDidMount() {
        var response = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/ListEnemy', {
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

        var response2 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/ListEnemyRanking', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            }

        })
        var exam2 = await response2.json();
        console.log(exam2);
        this.setState({ person2: exam2, loading: false });

        var response3 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/CompetitorPosition', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            }

        })
        var exam3 = await response3.json();
        console.log(exam3);
        this.setState({ person3: exam3, loading: false });
    }

    generateTableData1() {
        let res = [];
        let tableData1 = this.state.person;
        for (var i = 0; i < tableData1.length; i++) {
            res.push(
                <tr >
                    <td key={i + 1}>{i + 1}</td>
                    <td key={tableData1[i].firstName}>{tableData1[i].firstName}</td>
                    <td key={tableData1[i].lasttName}>{tableData1[i].lastName}</td>
                </tr>
            )
        }
        return res;
    }
    generateTableData2() {
        let res = [];
        let tableData2 = this.state.person2;
        var k;
        for (var i = 1; i < tableData2.length; i++) {
            k = i + 1
            res.push(
                <tr >
                    <td key={this.state.person3.rankingPosition - k}>{this.state.person3.rankingPosition - k}</td>
                    <td key={tableData2[i].firstName}>{tableData2[i].firstName}</td>
                    <td key={tableData2[i].lasttName}>{tableData2[i].lastName}</td>
                    <td><form className="form-inline"> <button onClick={this.openModal2} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                </tr>
            )

        }
        for (i = 0; i < tableData2.length - i; i++) {
            k = i + 1
            res.push(
                <tr >
                    <td key={this.state.person3.rankingPosition - k}>{this.state.person3.rankingPosition - k}</td>
                    <td key={tableData2[i].firstName}>{tableData2[i].firstName}</td>
                    <td key={tableData2[i].lasttName}>{tableData2[i].lastName}</td>
                    <td><form className="form-inline"> <button onClick={this.openModal2} className="btn" type="button" id="myBtn">Szczegóły</button> </form></td>
                </tr>
            )

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

    openModal2() {
        this.setState(
            { open2: true });
    }


    closeModal2() {
        this.setState(
            { open2: false });
    }
    openModal3() {
        this.setState(
            { open3: true });
    }


    closeModal3() {
        this.setState(
            { open3: false });
    }
    render() {
        var subtitle;
        function afterOpenModal() {
            subtitle.style.color = 'black';
        }
        function afterOpenModal2() {
            subtitle.style.color = 'black';
        }
        function afterOpenModal3() {
            subtitle.style.color = 'black';
        }
        return (

            <Wrapper>
                <div className="TitleResults">
                    <br></br>
                    <h1><b>TWÓJ PANEL WYNIKÓW</b></h1>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">

                        <div className="RankingResults">
                            <h2>    Ranking</h2>
                            <div className="szok">
                                <button onClick={this.openModal3} className="btn btn-dark" type="button" id="myBtn">Dodaj wynik rankingu</button>
                            </div>
                            <table className="table3" >
                                <tbody>
                                    <tr>
                                        <th>Pozycja </th>
                                        <th>Imie </th>
                                        <th> Nazwisko </th>
                                        <th>Szczegóły</th>

                                    </tr>
                                    {this.generateTableData2()}
                                    <tr>
                                        <td>{this.state.person3.rankingPosition}</td>
                                        <td>{this.state.person3.firstName}</td>
                                        <td>{this.state.person3.lastName}</td>
                                        <td>To ty</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="Upper">
                            <h2>Liga</h2>
                        </div>
                        <div className="LeagueResults">
                            <div className="szok">
                                <button onClick={this.openModal} className="btn btn-dark" type="button" id="myBtn">Dodaj wynik ligi</button>
                            </div>
                            <table className="table3" >
                                <tbody>
                                    <tr>
                                        <th>L.P </th>
                                        <th>Imie </th>
                                        <th> Nazwisko </th>

                                    </tr>
                                    {this.generateTableData1()}
                                </tbody>
                            </table>

                        </div>
                        <div className="Bottom">

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
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Zapisz wynik ligowy</h2>
                        <WriteResult />


                    </Modal>
                </div >
                <div>
                    <Modal
                        isOpen={this.state.open2}
                        onAfterOpen={this.afterOpenModal2}
                        onRequestClose={this.closeModal2}
                        style={customStyles2}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Informacje o przeciwniku</h2>

                        <MoreInfo />

                    </Modal>
                </div >
                <div>
                    <Modal
                        isOpen={this.state.open3}
                        onAfterOpen={this.afterOpenModal3}
                        onRequestClose={this.closeModal3}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Zapisz wynik rankingowy</h2>

                        <WriteResultRanking />

                    </Modal>
                </div >

            </Wrapper >
        )
    }
}
export default Results;