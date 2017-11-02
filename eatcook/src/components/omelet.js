import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picomelet from '/helloworld/eatcook/src/static/img/519541591.jpg'




const Omelet = () => (
    <div>
        <Navbar />
        <img className="imglearn" src={picomelet} />
    </div>

)

export default Omelet