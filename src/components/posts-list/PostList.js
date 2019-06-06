import React, { Component } from "react";
import Category from "./Category";

export class PostList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Category />
          </div>
          <div className="col-sm-9">
            <div className="alert alert-primary" role="alert">
              Latest Recomendations{" "}
            </div>
            <div>
              {/* <!-- Card deck --> */}
              <div className="card-deck">
                {/* <!-- Card --> */}
                <div className="card mb-4">
                  {/* <!--Card image--> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  {/* <!--Card content--> */}
                  <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">Card title</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                    <button type="button" className="btn btn-light-blue btn-md">
                      Read more
                    </button>
                  </div>
                </div>
                {/* <!-- Card --> */}

                {/* <!-- Card --> */}
                <div className="card mb-4">
                  {/* <!--Card image--> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  {/* <!--Card content--> */}
                  <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">Card title</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                    <button type="button" className="btn btn-light-blue btn-md">
                      Read more
                    </button>
                  </div>
                </div>
                {/* <!-- Card --> */}

                {/* <!-- Card --> */}
                <div className="card mb-4">
                  {/* <!--Card image--> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  {/* <!--Card content--> */}
                  <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">Card title</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                    <button type="button" className="btn btn-light-blue btn-md">
                      Read more
                    </button>
                  </div>
                </div>
                {/* <!-- Card --> */}
              </div>
              {/* <!-- Card deck --> */}
            </div>
            <div>
              {/* <!-- Card deck --> */}
              <div className="card-deck">
                {/* <!-- Card --> */}
                <div className="card mb-4">
                  {/* <!--Card image--> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  {/* <!--Card content--> */}
                  <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">Card title</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                    <button type="button" className="btn btn-light-blue btn-md">
                      Read more
                    </button>
                  </div>
                </div>
                {/* <!-- Card --> */}

                {/* <!-- Card --> */}
                <div className="card mb-4">
                  {/* <!--Card image--> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  {/* <!--Card content--> */}
                  <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">Card title</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                    <button type="button" className="btn btn-light-blue btn-md">
                      Read more
                    </button>
                  </div>
                </div>
                {/* <!-- Card --> */}

                {/* <!-- Card --> */}
                <div className="card mb-4">
                  {/* <!--Card image--> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  {/* <!--Card content--> */}
                  <div className="card-body">
                    {/* <!--Title--> */}
                    <h4 className="card-title">Card title</h4>
                    {/* <!--Text--> */}
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                    <button type="button" className="btn btn-light-blue btn-md">
                      Read more
                    </button>
                  </div>
                </div>
                {/* <!-- Card --> */}
              </div>
              {/* <!-- Card deck --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
