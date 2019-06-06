import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PostList from './components/posts-list/PostList';
import Login from './components/user/Login';
import Register from './components/user/Register';
import UserProfile from './components/user/UserProfile';
import AddPost from './components/posts-list/AddPost';
import Post from './components/posts-list/Post';


export class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={PostList}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={UserProfile}></Route>
                <Route path="/addpost" component={AddPost}></Route>
                <Route path="/post" component={Post}></Route>

            </Switch>
        )
    }
}

export default MainRouter
