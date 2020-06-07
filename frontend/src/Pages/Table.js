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
            matches: [],
            table: [],
        }
        this.generateTableData1 = this.generateTableData1.bind(this);
        this.generateTableData2 = this.generateTableData2.bind(this);
        this.generateTableData3 = this.generateTableData3.bind(this);
        this.generateTableData4 = this.generateTableData4.bind(this);
        this.generateTableData5 = this.generateTableData5.bind(this);
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

        var response4 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/LastMatchesAll', {
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

        var response5 = await fetch('https://teniswebsite.example.com:5001/api/v1/Result/TableRanking', {
            credentials: "include",
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        var exam5 = await response5.json();
        console.log(exam5);
        this.setState({ table: exam5, loading: false });
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

    generateTableData4() {
        let res = [];
        let tableData4 = this.state.matches;
        for (var i = 0; i < tableData4.length; i++) {
            if (tableData4[i].league === 0) {
                tableData4[i].league = "Ranking"
            } else if (tableData4[i].league === 1) {
                tableData4[i].league = "Liga"
            }
            if (tableData4[i].set3 == null) {
                tableData4[i].set3 = "brak"
            }
            res.push(
                <tr >
                    <td key={tableData4[i].ownerLastName}>{tableData4[i].ownerLastName}</td>
                    <td key={tableData4[i].set1}>{tableData4[i].set1}</td>
                    <td key={tableData4[i].set2}>{tableData4[i].set2}</td>
                    <td key={tableData4[i].set3}>{tableData4[i].set3}</td>
                    <td key={tableData4[i].enemyLasttName}>{tableData4[i].enemyLasttName}</td>
                    <td key={tableData4[i].league}>{tableData4[i].league}</td>
                </tr>
            )
        }
        return res;
    }

    generateTableData5() {
        let res = [];
        let tableData5 = this.state.table;
        for (var i = 0; i < tableData5.length; i++) {
            res.push(
                <tr >
                    <td key={tableData5[i].position}>{tableData5[i].position}</td>
                    <td key={tableData5[i].firstName}>{tableData5[i].firstName}</td>
                    <td key={tableData5[i].lasttName}>{tableData5[i].lasttName}</td>

                </tr>
            )
            if (i == 10) {
                break;
            }
        }
        return res;
    }
    generateTableData6() {
        let res = [];
        let tableData5 = this.state.table;
        for (var i = 10; i < tableData5.length; i++) {
            res.push(
                <tr >
                    <td key={tableData5[i].position}>{tableData5[i].position}</td>
                    <td key={tableData5[i].firstName}>{tableData5[i].firstName}</td>
                    <td key={tableData5[i].lasttName}>{tableData5[i].lasttName}</td>
                    <td key={tableData5[i].matchesWin}>{tableData5[i].matchesWin}</td>
                    <td key={tableData5[i].matchesLoss}>{tableData5[i].matchesLoss}</td>
                </tr>
            )
            if (i == 20) {
                break;
            }
        }
        return res;
    }
    generateTableData7() {
        let res = [];
        let tableData5 = this.state.table;
        for (var i = 20; i < tableData5.length; i++) {
            res.push(
                <tr >
                    <td key={tableData5[i].position}>{tableData5[i].position}</td>
                    <td key={tableData5[i].firstName}>{tableData5[i].firstName}</td>
                    <td key={tableData5[i].lasttName}>{tableData5[i].lasttName}</td>
                    <td key={tableData5[i].matchesWin}>{tableData5[i].matchesWin}</td>
                    <td key={tableData5[i].matchesLoss}>{tableData5[i].matchesLoss}</td>
                </tr>
            )
            if (i == 30) {
                break;
            }
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
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#pag5" role="tab" aria-controls="results">Wyniki</a>
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
                                                            {this.generateTableData5()}

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
                                                                <th>Wygrane </th>
                                                                <th>Porazki </th>
                                                            </tr>
                                                            {this.generateTableData6()}

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
                                                                <th>Wygrane </th>
                                                                <th>Porazki </th>
                                                            </tr>
                                                            {this.generateTableData7()}

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
                        <div className="tab-pane" id="pag5" role="tabpanel">
                            <div className="sv-tab-panel">
                                <table className="table2" >
                                    <tbody>
                                        <tr>
                                            <th>Gracz 1 </th>
                                            <th>Set1 </th>
                                            <th>Set2 </th>
                                            <th>Set3 </th>
                                            <th>Gracz 2 </th>
                                            <th>Typ rozgrywek </th>

                                        </tr>
                                        {this.generateTableData4()}
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