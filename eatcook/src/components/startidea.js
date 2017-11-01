import React from 'react'
import Navbar from './navbar'
import './../static/css/style.css'
import './../static/css/bootstrap.min.css'
import picstart from './../static/img/picture.png'

const Startidea = () => (

    <div>
        <Navbar />
        <div className="row bgstartidea text-right paddingtopstart">
            <div className="col-md-12 ">
                <h4 className="textshareidea">  SHARE  YOUR  IDEA </h4>
                <div className="col-md-5 float-right">
                    <div class="form-group">
                        <img className="paddingpicstart" src={picstart} width="150px" />
                        <img className="paddingpicstart" src={picstart} width="150px" />
                        <img className="paddingpicstart" src={picstart} width="150px" />
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                        <label className="textstartmanu" for="exampleFormControlTextarea1 ">START MENU </label>
                    </div>
                </div>
            </div>
        </div>
    </div>


)

export default Startidea 
