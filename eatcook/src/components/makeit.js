import React from 'react'
import logo1 from './../static/img/gloves.png'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './../static/css/style.css'


const Makeit = () => (
    
    <div>
        <Navbar />
        <div className="row bgmakeit  animated fadeIn">
            <div className="offset-md-8 col-md-3 ">
                <div className="text-center">
                    <img className="logo animated fadeInUp" src={logo1} />
                    <h1 className="colortextmakeit animated fadeInUp"> MAKE IT </h1>
                    <Link to="/learnandcook"><button className="btn btn-custom3 hvr-fadenavbar hvr-grow-shadow animated fadeInUp">LEARN AND COOK </button></Link>
                </div>
            </div>
        </div>
    </div>
)

export default Makeit