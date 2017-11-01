import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picrewards from './../static/img/medal.png'

const Rewards = () => (
    <div>
        <div className="row bgrewards ">
            <div className="col-sm-9 ">
                <div className="col-sm-4 text-center ">
                    <div className="paddingbot">
                        <img src={picrewards} width="140px" />
                    </div>
                    <h1 className="textcook">REWARDS</h1>
                    <Link to="/youridea.js"><button className="btn btn-custom2">GOOD TASTE</button></Link>
                </div>
            </div>
        </div>
    </div>

)

export default Rewards