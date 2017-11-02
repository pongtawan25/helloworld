import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import salad from './../static/img/6546.jpg'

const Salad = () => (
    <div>
        <Navbar />
        <div className="row text-center">
            <div className=" offset-md-6 col-md-10 buntonback  ">
                <Link to="/learnandcook"><button className=" btn btn-backtohome hvr-icon-back hvr-grow-shadow">Back to page</button></Link>
            </div>
            <img className="bgmanu" src={salad} />
        </div>
    </div>

)

export default Salad