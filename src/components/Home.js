import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import PostList from './posts-list/PostList';
import UserProfile from './user/UserProfile';
import Register from './user/Register';
import Login from './user/Login';

export class Home extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Route path="/" exact component={PostList}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={UserProfile}></Route>
                <Footer />




            </Router>
        )
    }
}

export default Home
