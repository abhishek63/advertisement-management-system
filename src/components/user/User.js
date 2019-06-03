import React, { Component } from 'react'
import Login from './Login';

export class User extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                        <Login/>
                    </div>
                    <div className="col-sm-4">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default User
