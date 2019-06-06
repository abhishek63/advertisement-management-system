import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer --> */}
        <footer className="page-footer font-small blue pt-4">
          {/* <!-- Footer Links --> */}
          <div className="container-fluid text-center text-md-left">
            {/* <!-- Grid row --> */}
            <div className="row">
              {/* <!-- Grid column --> */}
              <div className="col-md-6 mt-md-0 mt-3">
                {/* <!-- Content --> */}
                <h5 className="text-uppercase font-weight-bold">Purpose of this Web App</h5>
                <p>
                  The purpose of the online advertisement system is to ease the process of selling and buying items within an organization. We will have database to support advertisements over all the geographical locations where the organization is operational.
                </p>


              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none pb-3" />

              {/* <!-- Grid column --> */}
              <div className="col-md-3 mb-md-0 mb-3">
                {/* <!-- Links --> */}
                <h5 className="text-uppercase">Trending Location</h5>

                <ul className="list-unstyled">
                  <li>
                    Banglore
                  </li>
                  <li>
                    Pune
                  </li>
                  <li>
                    Kolkata
                  </li>
                  <li>
                    Mumbai
                  </li>
                  <li>
                    Patna
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 mb-md-0 mb-3">
                {/* <!-- Links --> */}
                <h5 className="text-uppercase">Devlopers</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Abhishek Kumar</a>
                  </li>
                  <li>
                    <a href="#!">Sumit Kumar</a>
                  </li>
                  <li>
                    <a href="#!">Rohan Majumdar</a>
                  </li>
                  <li>
                    <a href="#!">Nagarjun Yadav</a>
                  </li>
                  <li>
                    <a href="#!">Chandana</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid row --> */}
            </div>
          </div>
          {/* <!-- Footer Links --> */}

          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="https://abhishek63.github.io">
              {" "}
              Abhishek Kumar
            </a>
          </div>
          {/* <!-- Copyright --> */}

          {/* <!-- Footer --> */}
        </footer>
      </div>
    );
  }
}

export default Footer;
