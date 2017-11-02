import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import spagetti from './../static/img/56498.jpg'

const Spagetti = () => (
    <div>
        <Navbar />
        <div className="row text-center">
            <img className="bgmanu" src={spagetti} />
        </div>
    </div>



)

export default Spagetti