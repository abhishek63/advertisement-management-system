import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card">

                                <h5 className="card-header info-color white-text text-center py-4">
                                    <strong>Sign up</strong>
                                </h5>


                                <div className="card-body px-lg-5 pt-0">


                                    <form className="text-center">

                                        <div className="form-row">
                                            <div className="col">

                                                <div className="md-form">
                                                    <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                                                    <label for="materialRegisterFormFirstName">Name</label>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="md-form mt-0">
                                            <input type="email" id="materialRegisterFormEmail" className="form-control" />
                                            <label for="materialRegisterFormEmail">E-mail</label>
                                        </div>


                                        <div className="md-form">
                                            <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                                            <label for="materialRegisterFormPassword">Password</label>
                                            <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                                At least 8 characters and 1 digit
                                                </small>
                                        </div>
                                        <div className="md-form">
                                            <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                                            <label for="materialRegisterFormPassword">Confirm Password</label>
                                            <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                                At least 8 characters and 1 digit
                                                </small>
                                        </div>


                                        <div className="md-form">
                                            <input type="password" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                                            <label for="materialRegisterFormPhone">Phone number</label>
                                            <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                                Optional - for two step authentication
                                </small>
                                        </div>
                                        <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>


                                        <p>or sign up with:</p>

                                        <a type="button" className="btn-floating btn-fb btn-sm">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a type="button" className="btn-floating btn-tw btn-sm">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a type="button" className="btn-floating btn-li btn-sm">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a type="button" className="btn-floating btn-git btn-sm">
                                            <i className="fab fa-github"></i>
                                        </a>

                                        <hr>

                                        </hr>
                                        <p>By clicking</p>
                                        <em>Sign up</em> you agree to our
                                <a href="" target="_blank">terms of service</a>

                                    </form>


                                </div>

                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register
