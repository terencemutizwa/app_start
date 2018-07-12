import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';
import App from './app/components/App/App.component';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
