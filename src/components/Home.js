import React, { Component } from 'react'
import {BrowserRouter as Router , NavLink ,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import PostList from './posts-list/PostList';
import User from './user/User';

export class Home extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Route path="/" exact component={PostList}></Route>
                <Route path="/login" exact component={User}></Route>
                <Footer/>

                
              

            </Router>
        )
    }
}

export default Home
