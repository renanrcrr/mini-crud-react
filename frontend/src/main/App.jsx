import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Routes from './Routers';
import Footer from "../components/templates/Footer";

//This function takes props as a parameter
//eslint-disable-next-line
export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>