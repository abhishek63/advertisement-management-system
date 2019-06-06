import React, { Component } from "react";
import "./post.css";

export class Post extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="m-2">
              <div
                id="carousel-example-1z"
                class="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-1z"
                    data-slide-to="0"
                    class="active"
                  />
                  <li data-target="#carousel-example-1z" data-slide-to="1" />
                  <li data-target="#carousel-example-1z" data-slide-to="2" />
                </ol>

                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(141).jpg"
                      alt="First slide"
                    />
                  </div>

                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#carousel-example-1z"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carousel-example-1z"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div>
              <div class="card m-2">
                <div class="card-body">
                  <h4 class="card-title">Details</h4>
                  <p class="card-text">
                    <table className="table">
                      <tr>
                        <th>Categories</th>
                        <td>Electronics</td>
                      </tr>
                      <tr>
                        <th>Sub Categories</th>
                        <td>Mobiles</td>
                      </tr>
                    </table>
                  </p>

                  <h4 class="card-title">Description</h4>
                  <p class="card-text">
                    Here is Maruti Suzuki Swift 2015 well maintained Car for
                    sale. Please contact me for further details.Very Good
                    Condition,Non Accidental, Original Paint, Single Owner, Test
                    Drive Available. I do not wish to be contacted by
                    telemarketers or representatives of any other website.
                    Buyer's Guidelines: - Chat and ask questions to be clear on
                    the vehicle details - While going for a physical vehicle
                    inspection, please be aware of time and place of meeting -
                    Be careful when paying offline - Do not deposit/transfer
                    money to bank or any third party payment gateways without
                    verifying the credentials
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="m-2">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-title"><i class="fas fa-rupee-sign"></i>15999</h1>

                  <h4 class="card-title">Apple Iphone 5s</h4>
                  <p>Samudrapur, Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card m-2">
                <div class="card-body">
                  <h4 class="card-title"><i class="fas fa-user"></i> Seller Description</h4>

                  <div class="media px-1">
                    <img
                      class="card-img-100 rounded-circle d-flex z-depth-1 mr-3"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="font-weight-bold mt-0">
                        <a class="text-default" href="">
                          Danny Newman
                        </a>
                      </h5>
                      <a href="#" class="btn btn-primary">
                        Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-2">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title"><i class="fas fa-map-marker-alt"></i> Posted in</h4>

                  <div
                    id="map-container-google-9"
                    class="z-depth-1-half map-container-5"
                    style={{ height: "300px" }}
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=Hinjawadi Pune,Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      style={{ border: "0" }}
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
