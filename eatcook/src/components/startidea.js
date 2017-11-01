import React from 'react'
import Navbar from './navbar'
import './../static/css/style.css'
import './../static/css/bootstrap.min.css'

const Startidea = () => (
    
    <div>
        <Navbar />
        <div className="row text-right ">
            <div className="col-md-9 ">
                <h4>  SHARE  YOUR  IDEA </h4>
            </div>
        </div>
        <div className="container text-right">
            <div className="col-7 float-right">
                <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    <label for="exampleFormControlTextarea1">START MENU </label>
                </div>
            </div>
        </div>
    </div>
)

export default Startidea 
