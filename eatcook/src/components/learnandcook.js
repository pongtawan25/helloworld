import React from 'react'
import Navbar from './navbar'
import './../static/css/style.css'
import { Link } from 'react-router-dom'

const Learnandcook = () => (
    <div>
        <Navbar />
        <div className="row textboxtop">
            <div className="text-center">
                <h1> LEARN AND COOK </h1>
            </div>
        </div>
        <div className="container ">
            <div class="col-3  float-right text-center">
                <Link to="#"><button className="buttonlearn"> OMELET EGG </button></Link>
                <Link to="#"><button className="buttonlearn"> SPAGHTTI </button></Link>
                <Link to="#"><button className="buttonlearn"> SPIANACH SALAD </button></Link>
                <Link to="#"><button className="buttonlearn"> DONUT POPERS </button></Link>

            </div>
        </div>
    </div>
)

export default Learnandcook 