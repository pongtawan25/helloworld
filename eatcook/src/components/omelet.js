import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import omelet from './../static/img/519541591.jpg'


const Omelet = () => (
    <div>
        <Navbar />
        <div className="row text-center">
            <img className="bgmanu" src={omelet} />
        </div>
    </div>
)

export default Omelet