import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import PostList from './posts-list/PostList';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PostList/>
                <Footer/>
            </div>
        )
    }
}

export default Home
