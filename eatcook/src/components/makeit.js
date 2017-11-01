import React from 'react'
import logo1 from './../static/img/gloves.png'
import { Link } from 'react-router-dom'
import './../static/css/style.css'


const Makeit = () => (
    
    <div>
<<<<<<< HEAD
        <div className="row bgmakeit">
            <div className="offset-md-8 col-md-3 ">
=======
        <Navbar />
        <div className="row texthaderight ">
            <div className="col-md-6 ">
>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
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