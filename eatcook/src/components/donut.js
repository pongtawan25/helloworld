import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import donut from './../static/img/515.jpg'

const Donut = () => (
    <div>
        <Navbar />
        <div className="row text-center">
            <div className=" offset-md-6 col-md-10 buntonback  ">
                <Link to="/learnandcook"><button className=" btn btn-backtohome hvr-icon-back hvr-grow-shadow">Back to page</button></Link>
            </div>
            <img className="bgmanu" src={donut} />
        </div>
    </div>

)

export default Donut