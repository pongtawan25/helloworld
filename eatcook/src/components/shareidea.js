import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import picshare from './../static/img/chef.png'
import './../static/css/bootstrap.min.css'

const Shareidea = () => (
    
    <div>
<<<<<<< HEAD
        <div className="row bgsharidea ">
            <div className="col-md-8 ">
                <div className="text-center ">
                        <img className="paddingbot" src ={picshare} width="140px" />         
                    <h1 className="textcook">SHARE</h1>
                    <Link to="/youridea"><button className="btn btn-custom2">YOUR IDEA</button></Link>
=======
<<<<<<< HEAD
        <div className="row bgshareidea">
            
=======
        <Navbar />
        <div className="row texthadeleft">
            <div className="col-md-6 ">
                <div className="text-center">
                    <h1> SHARE <br /> <Link to="/youridea"><button className="buttonnav">YOUR IDEA</button></Link> </h1>
>>>>>>> b6202654a962e5488ce50914a805886b26dc2285
                </div>
            </div>
>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
        </div>
    </div>


)

export default Shareidea