import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picshare from './../static/img/chef.png'
import './../static/css/bootstrap.min.css'

const Shareidea = () => (
    <div>
        <div className="row bgsharidea ">
            <div className="col-md-8 ">
                <div className="text-center ">
                        <img className="paddingbot" src ={picshare} width="140px" />         
                    <h1 className="textcook">SHARE</h1>
                    <Link to="/youridea"><button className="btn btn-custom2">YOUR IDEA</button></Link>
                </div>
            </div>
        </div>
    </div>


)

export default Shareidea