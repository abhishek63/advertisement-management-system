import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

export class Login extends Component {
  render() {
    return (
      <div className="container">
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                        <div class="card">
                            <h5 class="card-header info-color white-text text-center py-4">
                                <strong>Sign in</strong>
                            </h5>

                            <div class="card-body px-lg-5 pt-0">
                                <form class="text-center" style={{ "color": "#757575" }}>
                                    <div class="md-form">
                                        <input
                                            type="email"
                                            id="materialLoginFormEmail"
                                            class="form-control"
                                        />
                                        <label for="materialLoginFormEmail">E-mail</label>
                                    </div>

                                    <div class="md-form">
                                        <input
                                            type="password"
                                            id="materialLoginFormPassword"
                                            class="form-control"
                                        />
                                        <label for="materialLoginFormPassword">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-around">
                                        <div>
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id="materialLoginFormRemember"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="materialLoginFormRemember"
                                                >
                                                    Remember me
                    </label>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="">Forgot password?</a>
                                        </div>
                                    </div>

                                    <button
                                        class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                                        type="submit"
                                    >
                                        Sign in
              </button>
                                </form>

                                <p>
                                    Not a member?
              <NavLink to="/register">Register</NavLink>
                                </p>

                                <p>or sign in with:</p>
                                <a type="button" class="btn-floating btn-fb btn-sm">
                                    <i class="fab fa-facebook-f" />
                                </a>
                                <a type="button" class="btn-floating btn-tw btn-sm">
                                    <i class="fab fa-twitter" />
                                </a>
                                <a type="button" class="btn-floating btn-li btn-sm">
                                    <i class="fab fa-linkedin-in" />
                                </a>
                                <a type="button" class="btn-floating btn-git btn-sm">
                                    <i class="fab fa-github" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>
            </div>
      
    );
  }
}

export default Login;
