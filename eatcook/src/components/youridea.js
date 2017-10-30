import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'

const Youridea = () => (
    <div>
        <div className="bgstartidea">
            <Navbar />
            <div className="row textboxtop">
                <div className="text-center">
                    <h1> LET'S SHEAR YOUR IDEA </h1>
                    <Link to="/startidea"><button className="buttonnav">START IDEA</button></Link>
                </div>
            </div>
        </div>
    </div>
)

export default Youridea 
