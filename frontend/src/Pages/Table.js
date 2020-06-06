import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
import 'react-tabs/style/react-tabs.css';
class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            person1: [],
            person2: [],
            person3: [],
        }
        this.generateTableData1 = this.generateTableData1.bind(this);
        this.generateTableData2 = this.generateTableData2.bind(this);
        this.generateTableData3 = this.generateTableData3.bind(this);
    }
    async componentDidMount() {
        var response1 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/TableLegue/1', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        var exam1 = await response1.json();
        console.log(exam1);
        this.setState({ person1: exam1, loading: false });

        var response2 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/TableLegue/2', {
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

        var response3 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/TableLegue/3', {
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
        let tableData1 = this.state.person1;
        for (var i = 0; i < tableData1.length; i++) {
            res.push(
                <tr >
                    <td key={tableData1[i].position}>{tableData1[i].position}</td>
                    <td key={tableData1[i].firstName}>{tableData1[i].firstName}</td>
                    <td key={tableData1[i].lasttName}>{tableData1[i].lasttName}</td>
                    <td key={tableData1[i].matchesWin}>{tableData1[i].matchesWin}</td>
                    <td key={tableData1[i].matchesLoss}>{tableData1[i].matchesLoss}</td>
                    <td key={tableData1[i].setsWin}>{tableData1[i].setsWin}</td>
                    <td key={tableData1[i].setsLoss}>{tableData1[i].setsLoss}</td>
                    <td key={tableData1[i].points}>{tableData1[i].points}</td>
                </tr>
            )
        }
        return res;
    }

    generateTableData2() {
        let res = [];
        let tableData2 = this.state.person2;
        for (var i = 0; i < tableData2.length; i++) {
            res.push(
                <tr >
                    <td key={tableData2[i].position}>{tableData2[i].position}</td>
                    <td key={tableData2[i].firstName}>{tableData2[i].firstName}</td>
                    <td key={tableData2[i].lasttName}>{tableData2[i].lasttName}</td>
                    <td key={tableData2[i].matchesWin}>{tableData2[i].matchesWin}</td>
                    <td key={tableData2[i].matchesLoss}>{tableData2[i].matchesLoss}</td>
                    <td key={tableData2[i].setsWin}>{tableData2[i].setsWin}</td>
                    <td key={tableData2[i].setsLoss}>{tableData2[i].setsLoss}</td>
                    <td key={tableData2[i].points}>{tableData2[i].points}</td>
                </tr>
            )
        }
        return res;
    }

    generateTableData3() {
        let res = [];
        let tableData3 = this.state.person3;
        for (var i = 0; i < tableData3.length; i++) {
            res.push(
                <tr >
                    <td key={tableData3[i].position}>{tableData3[i].position}</td>
                    <td key={tableData3[i].firstName}>{tableData3[i].firstName}</td>
                    <td key={tableData3[i].lasttName}>{tableData3[i].lasttName}</td>
                    <td key={tableData3[i].matchesWin}>{tableData3[i].matchesWin}</td>
                    <td key={tableData3[i].matchesLoss}>{tableData3[i].matchesLoss}</td>
                    <td key={tableData3[i].setsWin}>{tableData3[i].setsWin}</td>
                    <td key={tableData3[i].setsLoss}>{tableData3[i].setsLoss}</td>
                    <td key={tableData3[i].points}>{tableData3[i].points}</td>
                </tr>
            )
        }
        return res;
    }
    render() {
        return (
            <Wrapper>

                <div className="menubok">
                    <div className="vertical-tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#pag1" role="tab" aria-controls="home">Ranking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#pag2" role="tab" aria-controls="profile">I Liga</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#pag3" role="tab" aria-controls="messages">II Liga</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#pag4" role="tab" aria-controls="settings">III Liga</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tabeleprawo">
                    <div className="tab-content">
                        <div className="tab-pane active" id="pag1" role="tabpanel">
                            <div className="sv-tab-panel">
                                <div className="tabbable-panel">
                                    <div className="tabbable-line tabs-below">
                                        <div className="ilosckontent">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_below_1">

                                                    <table className="table2" >
                                                        <tbody>
                                                            <tr>
                                                                <th>Miejsce </th>
                                                                <th>Imie </th>
                                                                <th>Nazwisko </th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Janusz</td>
                                                                <td>Nosacz</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Tadeusz</td>
                                                                <td>Kiszka</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>7</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>8</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>9</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>
                                                            <tr>
                                                                <td>10</td>
                                                                <td>Pjoter</td>
                                                                <td>Ojpjoter</td>
                                                            </tr>

                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className="tab-pane" id="tab_below_2">
                                                    <table className="table2" >
                                                        <tbody>
                                                            <tr>
                                                                <th>Miejsce </th>
                                                                <th>Imie </th>
                                                                <th>Nazwisko </th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Janusz</td>
                                                                <td>Nosacz</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="tab_below_3">
                                                    <table className="table2" >
                                                        <tbody>
                                                            <tr>
                                                                <th>Miejsce </th>
                                                                <th>Imie </th>
                                                                <th>Nazwisko </th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Janusz</td>
                                                                <td>Nosacz</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ilosctabs">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li >
                                                    <a className="nav-link active" href="#tab_below_1" data-toggle="tab">
                                                        TOP 10 </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#tab_below_2" data-toggle="tab">
                                                        11-20 </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#tab_below_3" data-toggle="tab">
                                                        21-30 </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane" id="pag2" role="tabpanel">
                            <div className="sv-tab-panel">
                                <table className="table2" >
                                    <tbody>
                                        <tr>
                                            <th>Miejsce </th>
                                            <th>Imie </th>
                                            <th>Nazwisko </th>
                                            <th>Mecze wygrane </th>
                                            <th>Mecze przegrane </th>
                                            <th>Sety wygrane </th>
                                            <th>Sety przegrane </th>
                                            <th>Punkty </th>
                                        </tr>
                                        {this.generateTableData1()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane" id="pag3" role="tabpanel">
                            <div className="sv-tab-panel">
                                <table className="table2" >
                                    <tbody>
                                        <tr>
                                            <th>Miejsce </th>
                                            <th>Imie </th>
                                            <th>Nazwisko </th>
                                            <th>Mecze wygrane </th>
                                            <th>Mecze przegrane </th>
                                            <th>Sety wygrane </th>
                                            <th>Sety przegrane </th>
                                            <th>Punkty </th>
                                        </tr>
                                        {this.generateTableData2()}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="tab-pane" id="pag4" role="tabpanel">
                            <div className="sv-tab-panel">
                                <table className="table2" >
                                    <tbody>
                                        <tr>
                                            <th>Miejsce </th>
                                            <th>Imie </th>
                                            <th>Nazwisko </th>
                                            <th>Mecze wygrane </th>
                                            <th>Mecze przegrane </th>
                                            <th>Sety wygrane </th>
                                            <th>Sety przegrane </th>
                                            <th>Punkty </th>
                                        </tr>
                                        {this.generateTableData3()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>






            </Wrapper >
        )
    }
}

export default Table;