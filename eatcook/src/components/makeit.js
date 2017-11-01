import React from 'react'
import logo1 from './../static/img/gloves.png'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './../static/css/style.css'


const Makeit = () => (
    
    <div>
        <Navbar />
        <div className="row bgmakeit">
            <div className="offset-md-8 col-md-3 ">
                <div className="text-center">
                    <img className="logo" src={logo1} />
                    <h1 className="colortextmakeit"> MAKE IT </h1>
                    <Link to="/learnandcook"><button className="btn buttonlearnandcook">LEARN AND COOK </button></Link>
                </div>
            </div>
        </div>
    </div>
)

export default Makeit