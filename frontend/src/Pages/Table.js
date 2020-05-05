import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
import 'react-tabs/style/react-tabs.css';
function Table() {
    return (
        <Wrapper>

            <div class="menubok">
                <div class="vertical-tabs">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#pag1" role="tab" aria-controls="home">Ranking</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#pag2" role="tab" aria-controls="profile">I Liga</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#pag3" role="tab" aria-controls="messages">II Liga</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#pag4" role="tab" aria-controls="settings">III Liga</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tabeleprawo">
                <div class="tab-content">
                    <div class="tab-pane active" id="pag1" role="tabpanel">
                        <div class="sv-tab-panel">
                            <div class="tabbable-panel">
                                <div class="tabbable-line tabs-below">
                                    <div class="ilosckontent">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab_below_1">

                                                <table className="table" >
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
                                            <div class="tab-pane" id="tab_below_2">
                                                Howdy, I'm in Tab 2.
                                        </div>
                                            <div class="tab-pane" id="tab_below_3">
                                                Howdy, I'm in Tab 3.
                                        </div>
                                        </div>
                                    </div>
                                    <div class="ilosctabs">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li >
                                                <a class="nav-link active" href="#tab_below_1" data-toggle="tab">
                                                    TOP 10 </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#tab_below_2" data-toggle="tab">
                                                    11-20 </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#tab_below_3" data-toggle="tab">
                                                    21-30 </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tab-pane" id="pag2" role="tabpanel">
                        <div class="sv-tab-panel">
                            <table className="table1" >
                                <tbody>
                                    <tr>
                                        <td><strong>  </strong></td>
                                        <th><strong>Johny Brawo </strong></th>
                                        <th><strong>Jan Brzechwa </strong></th>
                                        <th><strong>Kamil Pietras </strong></th>
                                        <th><strong>Łukasz Buła </strong></th>
                                        <th><strong>Teodor Kopeć </strong></th>
                                        <th><strong>Kim Kolwiek </strong></th>
                                        <th><strong>Dexter Vasiliew </strong></th>
                                        <th><strong>Boel Lek </strong></th>
                                        <th><strong>Loel Lek </strong></th>
                                        <th><strong>Scooby Doo </strong></th>
                                        <th><strong>Punkty </strong></th>
                                    </tr>
                                    <tr>
                                        <th><strong>Johny Brawo </strong></th>
                                        <td></td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Jan Brzechwa </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Kamil Pietras </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Łukasz Buła </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Teodor Kopeć </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Kim Kolwiek </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Dexter Vasiliew </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Boel Lek </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Loel Lek </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th><strong>Scooby Doo </strong></th>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>6:1 <br />6:3<br />2:6</td>
                                        <td>3</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" id="pag3" role="tabpanel">
                        <div class="sv-tab-panel">
                            <h3>TAB 3</h3>
                            <p>CONTEUDO 3</p>
                        </div>
                    </div>
                    <div class="tab-pane" id="pag4" role="tabpanel">
                        <div class="sv-tab-panel">
                            <h3>TAB 4</h3>
                            <p>CONTEUDO 4</p>
                        </div>
                    </div>
                </div>
            </div>






        </Wrapper >
    )
}

export default Table;