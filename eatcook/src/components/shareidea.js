import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'


const Shareidea = () => (
    <div>
        <div className="row texthadeleft">
            <div className="col-md-6 ">
                <div className="text-center">
                    <h1> SHARE <br /> <Link to="/youridea"><button className="buttonnav">YOUR IDEA</button></Link> </h1>
                </div>
            </div>
        </div>
    </div>
)

export default Shareidea