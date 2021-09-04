import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//install react-router-dom and import browser-router
import { BrowserRouter } from "react-router-dom"
//whatever page we need to show, we need to wrote inside browser-router

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);


