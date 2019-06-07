import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom'
import {isAuthenticated} from "../auth/"

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  signout = (next) => {

    if (typeof window !== "undefined")
      localStorage.removeItem("jwt")

    next();

    return fetch("http://localhost:4000/api/signout", {
      method: "GET"

    }).then(response => {
      console.log("signout", response)
      return response.json()
    })
  }

  

  render() {
    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color">
          <a className="navbar-brand" href="#">
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} width="90" height="25" />
          </a>
          <form className="form-inline">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-6"
                type="text"
                placeholder="Find car, mobile and many more"
                aria-label="Search"
              />
            </div>
            <button
              className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
              type="submit"
            >
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav ml-auto">
              {
                !isAuthenticated() && (<>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      <i className="fab fa-facebook-f" /> Login
              {/* <span className="sr-only">(current)</span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      <i className="fab fa-facebook-f" /> Sign Up
              {/* <span className="sr-only">(current)</span> */}
                    </NavLink>
                  </li>
                </>)
              }

              {
                isAuthenticated() && (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/addpost">
                        <span>  <i class="fa fa-plus"></i> Post Ad</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" onClick={() => { this.signout(() => { this.props.history.push('/') }) }}>
                        <span>  sign out</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link">
                        <span>{isAuthenticated().user.name}</span>
                      </NavLink>
                    </li>
                  </>
                )
              }

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user" /> Profile{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-info"
                  aria-labelledby="navbarDropdownMenuLink-4"
                >
                  <a className="dropdown-item" href="#">
                    My account
                  </a>
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
