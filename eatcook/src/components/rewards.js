import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picrewards from './../static/img/medal.png'

const Rewards = () => (
    
    <div>
<<<<<<< HEAD
        <div className="row bgrewards ">
            <div className="col-sm-9 ">
                <div className="col-sm-4 text-center ">
                    <div className="paddingbot">
                        <img src={picrewards} width="140px" />
                    </div>
                    <h1 className="textcook">REWARDS</h1>
                    <Link to="/youridea.js"><button className="btn btn-custom2">GOOD TASTE</button></Link>
=======
        <Navbar />
        <div className="row texthadeleft ">
            <div className="col-md-6 ">
                <div className="text-center">
                    <h1> REWARDS <br /> <Link to="/goodtest"><button className="buttonnav">GOOD TESTE</button></Link> </h1>
>>>>>>> b6202654a962e5488ce50914a805886b26dc2285
                </div>
            </div>
        </div>
    </div>

)

export default Rewards