import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './register.css'
export class Register extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            password: "",
            phone: "",
            city: "",
            address: "",
            error: "",
            success: false
        }
    }

    handleChange = name => event => {
        this.setState({ error: "" })
        this.setState({
            [name]: event.target.value
        })
    }

    onClickSubmit = event => {
        event.preventDefault();
        const { firstName, lastName, email, password, phone, city, address, gender } = this.state;
        const user = {
            firstName, lastName, email, password, phone, city, address, gender
        }

        console.log(user);

        this.signup(user).then(data => {
            if (data.error)
                this.setState({ error: data.error })
            else {
                this.setState({
                    firstName: "",
                    lastName: "",
                    gender: "",
                    email: "",
                    password: "",
                    phone: "",
                    city: "",
                    address: "",
                    error: "",
                    success: true
                })

            }

        })

    }

    signup(user) {
        return fetch("http://localhost:4000/api/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>Welcome</h3>
                            <p>You are 30 seconds away from posting your own ad!</p>
                            <NavLink to="/login"><input type="submit" name="" value="Login" /></NavLink><br />
                        </div>
                        <div className="col-md-9 register-right">

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Create Account</h3>

                                    <div className="row register-form">
                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name *" onChange={this.handleChange("firstName")} value={this.state.firstName} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name *" onChange={this.handleChange("lastName")} value={this.state.lastName} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password *" onChange={this.handleChange("password")} value={this.state.password} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Confirm Password *" value={this.state.confirmPassword} />
                                            </div>
                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" value="male" onChange={this.handleChange("gender")} />
                                                        <span> Male </span>
                                                    </label>
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" value="female" onChange={this.handleChange("gender")} />
                                                        <span>Female </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <span style={{ display: this.state.error ? "" : "none", color: "red" }}>{this.state.error}</span>

                                            <span style={{ display: this.state.success ? "" : "none", color: "red" }}>Account is successfully created</span>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" onChange={this.handleChange("email")} placeholder="Your Email *" value={this.state.email} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="txtEmpPhone" className="form-control" onChange={this.handleChange("phone")} placeholder="Your Phone *" value={this.state.phone} />
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control" onChange={this.handleChange("city")} value={this.state.city}>
                                                    <option className="hidden" value="" disabled>Please select your current city</option>
                                                    <option value="Pune">Pune</option>
                                                    <option value="Kolkata">Kolkata</option>
                                                    <option value="Patna">Patna</option>
                                                    <option value="Banglore">Banglore</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" onChange={this.handleChange("address")} placeholder="Address *" value={this.state.address} />
                                            </div>
                                            <input type="submit" onClick={this.onClickSubmit} className="btnRegister" value="Register" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Register
