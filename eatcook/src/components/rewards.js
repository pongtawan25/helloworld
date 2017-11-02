import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picrewards from './../static/img/medal.png'

const Rewards = () => (    
    <div>
        <Navbar />
        <div className="row bgrewards  animated fadeIn">
        <div className="offset-md-2 col-md">
                <div className="col-md-4 text-center ">
                    <div className=" logoshare ">
                    </div>
                    <img className= "logore  animated fadeInUp" src={picrewards} width="160px" />
                    <h1 className="textreword animated fadeInUp">REWARDS</h1>
                    <button className="btn btn-custom2 hvr-fadenavbar hvr-grow-shadow animated fadeInUp">GOOD TASTE</button>
                </div>
            </div>
        </div>
    </div>


)

export default Rewards