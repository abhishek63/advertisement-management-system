import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import MainRouter from '../MainRouter';

export class Home extends Component {
    render() {
        return (
            <Router>
                <Header />
                <MainRouter/>
                <Footer />

            </Router>
        )
    }
}

export default Home
