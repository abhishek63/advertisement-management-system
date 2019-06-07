import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import {singin,authenticate} from "../../auth"

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: "",
      redirectToReferer: false
    };
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    singin(user).then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        });
      } else {
        //authenticate
        authenticate(data, () => {
          this.setState({ redirectToReferer: true });
        });

        //redirect
      }
    });
  };

  render() {
    if (this.state.redirectToReferer) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <div class="card">
              <div class="card-header info-color white-text text-center py-4">
                <h5>
                  <strong>Sign in</strong>
                </h5>
                <div
                  class="alert alert-danger"
                  style={{ display: this.state.error ? "" : "none" }}
                >
                  {this.state.error}
                </div>
              </div>

              <div class="card-body px-lg-5 pt-0">
                <form class="text-center" style={{ color: "#757575" }}>
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialLoginFormEmail"
                      class="form-control"
                      onChange={this.handleChange("email")}
                      value={this.state.email}
                    />
                    <label for="materialLoginFormEmail">E-mail</label>
                  </div>

                  <div class="md-form">
                    <input
                      type="password"
                      id="materialLoginFormPassword"
                      class="form-control"
                      onChange={this.handleChange("password")}
                      value={this.state.password}
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
                    onClick={this.onSubmit}
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
          <div className="col-sm-4" />
        </div>
      </div>
    );
  }
}

export default Login;
