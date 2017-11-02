import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picshare from './../static/img/chef.png'
import './../static/css/bootstrap.min.css'
import Navbar from './navbar'


const Shareidea = () => (
    <div>
        <Navbar />
        <div className="row bgsharidea  animated fadeIn">
            <div className="offset-md-2 col-md">
                    <img className="logoshare  animated fadeInUp" src={picshare} width="170px" />
                    <h1 className="textcook animated fadeInUp">SHARE</h1>
                    <div className="logoshare "> <Link to="/youridea"><button className="btn btn-custom2 hvr-fadenavbar hvr-grow-shadow animated fadeInUp">YOUR IDEA</button></Link></div>
                </div>
            </div>
        </div>
    


)

export default Shareidea