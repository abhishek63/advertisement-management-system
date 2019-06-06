import React, { Component } from 'react'

export class AddPost extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-2 ">

                    </div>
                    <div className="col-md-8">
                        <div className="jumbotron">
                            <div className="">
                                <div className="">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 border-right">
                                                <h4>Post your Ad</h4>
                                            </div>
                                            <div className="col-md-7">
                                                <button type="button" className="btn btn-sm btn-primary">Add New</button>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-8">
                                                <form>



                                                    <div className="col-12">


                                                        <p>Name of the product</p>


                                                        <input id="text" name="text" placeholder="Title" className="form-control here" required="required" type="text" />
                                                        <br />
                                                    </div>


                                                    <br />
                                                    <div className="col-12">


                                                        <p>Select Product Category</p>
                                                        <select className="form-control">
                                                            <option>Select Category</option>
                                                            <option>Clothing</option>
                                                            <option>Electronics</option>
                                                            <option>Vehicles</option>
                                                            <option>Books</option>
                                                            <option>Furnitures</option>
                                                            <option>Others</option>








                                                        </select>




                                                        <br />
                                                    </div>
                                                    <div className="col-12">


                                                        <p>PRICE</p>

                                                        <input id="text" name="text" placeholder="₹" className="form-control here" required="required" type="text" />
                                                        <br />
                                                    </div>





                                                    <div className="col-12">
                                                        <label for="textarea">DESCRIPTION</label>
                                                        <textarea id="textarea" name="textarea" cols="40" rows="5" className="form-control"></textarea>
                                                        <br />
                                                    </div>

                                                    <div className="col-12">
                                                        <p>Add Image</p>
                                                        <input id="file" name="file" required="required" type="file" />
                                                        <br />
                                                    </div>
                                                    <div className="col-12">

                                                        <br />
                                                        <p>Contact Number</p>

                                                        <input id="text" name="text" placeholder="+91" className="form-control here" required="required" type="text" />
                                                        <br />
                                                    </div>



                                                    <div className="col-12">
                                                        <br />
                                                        <br />

                                                        <p>Confirm Your Location</p>
                                                        <select className="form-control">
                                                            <option>Select City</option>
                                                            <option>Pune</option>
                                                            <option>Kolkata</option>
                                                            <option>Chennai</option>
                                                            <option>Bangalore</option>
                                                            <option>Mumbai</option>
                                                            <option>Delhi</option>
                                                            <option>Hyderabad</option>








                                                        </select>




                                                        <br />
                                                    </div>

                                                    <div className="col-12">
                                                        <label for="textarea">Address</label>
                                                        <textarea id="textarea" name="textarea" cols="10" rows="3" className="form-control"></textarea>
                                                        <br />
                                                    </div>




                                                </form>

                                                <div className="col-md-7">
                                                    <button type="button" className="btn btn-sm btn-primary">POST</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-2 ">
                </div>

            </div>

        )
    }
}

export default AddPost
