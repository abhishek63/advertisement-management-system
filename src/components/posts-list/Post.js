import React, { Component } from 'react'

export class Post extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div>

                            <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                                </ol>

                                <div class="carousel-inner" role="listbox">

                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(141).jpg" alt="First slide" />
                                    </div>


                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" alt="Third slide" />
                                    </div>
                                </div>

                                <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div>

                            <div class="card m-2">

                                <div class="card-body">

                                    <h4 class="card-title"><a>Card title</a></h4>

                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    <a href="#" class="btn btn-primary">Button</a>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="m-2">
                            <div class="card">



                                <div class="card-body">

                                    <h4 class="card-title"><a>Card title</a></h4>

                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    <a href="#" class="btn btn-primary">Button</a>

                                </div>

                            </div>

                        </div>
                        <div>
                            <div class="card m-2">

                                <div class="card-body">

                                    <h4 class="card-title"><a>Card title</a></h4>

                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    <a href="#" class="btn btn-primary">Button</a>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
