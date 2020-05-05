import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppLogged from './AppLogged';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

