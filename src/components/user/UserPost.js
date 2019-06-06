import React, { Component } from "react";

export class UserPost extends Component {
  render() {
    return (
      <div>
        <section>
         
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              consectetur accusamus velit nostrum et magnam.
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UserPost;
