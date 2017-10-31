import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'


const Makeit = () => (
    <div>
        <div className="row texthaderight ">
            <div className="col-md-6 ">
                <div className="text-center">
                    <h1> MAKE IT <br /> <Link to="/learnandcook"><button className="buttonnav">LEARN AND COOK </button></Link> </h1>
                </div>
            </div>
        </div>
    </div>
)

export default Makeit