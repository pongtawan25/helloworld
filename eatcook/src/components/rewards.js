import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picrewards from './../static/img/medal.png'

const Rewards = () => (    
    <div>
        <Navbar />
        <div className="row bgrewards ">
        <div className="offset-md-1 col-md">
                <div className="col-sm-3 text-center ">
                    <div className="paddingbot logoshare ">
                        <img src={picrewards} width="140px" />
                    </div>
                    <h1 className="textcook">REWARDS</h1>
                    <div className="logoshare "> <Link to="/youridea.js"><button className="btn btn-custom2">GOOD TASTE</button></Link></div>
                </div>
            </div>
        </div>
    </div>


)

export default Rewards