import React, { Component } from "react";

export class Category extends Component {
  render() {
    return (
      <div>
        <div class="card">
            <div class="card-header">
                Filters
            </div>
          <article class="card-group-item">
            <header class="card-header">
              <h6 class="title">Categories </h6>
            </header>
            <div class="filter-content">
              <div class="card-body">
                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">52</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check1"
                  />
                  <label class="custom-control-label" for="Check1">
                    Mobiles
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">132</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check2"
                  />
                  <label class="custom-control-label" for="Check2">
                    Cars
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">17</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check3"
                  />
                  <label class="custom-control-label" for="Check3">
                    Bikes
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">7</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check4"
                  />
                  <label class="custom-control-label" for="Check4">
                    Computers
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">52</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check1"
                  />
                  <label class="custom-control-label" for="Check1">
                    Samsung
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">132</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check2"
                  />
                  <label class="custom-control-label" for="Check2">
                    Black berry
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">17</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check3"
                  />
                  <label class="custom-control-label" for="Check3">
                    Samsung
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">7</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check4"
                  />
                  <label class="custom-control-label" for="Check4">
                    Other Brand
                  </label>
                </div>
              </div>
            </div>
          </article>
          <article class="card-group-item">
            <header class="card-header">
              <h6 class="title">Location </h6>
            </header>
            <div class="filter-content">
              <div class="card-body">
                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">52</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check1"
                  />
                  <label class="custom-control-label" for="Check1">
                    Pune
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">132</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check2"
                  />
                  <label class="custom-control-label" for="Check2">
                    Mumbai
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">17</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check3"
                  />
                  <label class="custom-control-label" for="Check3">
                    Delhi
                  </label>
                </div>

                <div class="custom-control custom-checkbox">
                  <span class="float-right badge badge-light round">7</span>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Check4"
                  />
                  <label class="custom-control-label" for="Check4">
                    Patna
                  </label>
                </div>
              </div>
            </div>
          </article>
          <article class="card-group-item">
            <header class="card-header">
              <h6 class="title">Price </h6>
            </header>
            <div class="filter-content">
              <div class="card-body">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Min</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="$0"
                    />
                  </div>
                  <div class="form-group col-md-6 text-right">
                    <label>Max</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="$1,0000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Category;
