import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="offset-md-2 col-md">
                    <Link to="/"><button className="buttonnav">HOME</button></Link>
                </div>
                <div className="col-md">
                    <Link to="/shareidea"><button className="buttonnav">SHARE'IDEA</button></Link>
                </div>
                <div className="col-md">
                    <Link to="/makeit"><button className="buttonnav">MAKE IT</button></Link>
                </div>
                <div className="col-md">
                    <Link to="/rewards"><button className="buttonnav">REWARDS</button></Link>
                </div>
                <div className="col-md">
                    <Link to="/inspiration"><button className="buttonnav">INSPIRATION</button></Link>
                </div>
                <div className="col-md">
                    <Link to="/contactus"><button className="buttonnav">CONTACT'US</button></Link>
                </div>
                <div className="offset-md-2">
                </div>
            </div>
        </div>
            <div className="container-fulid">
                <div className="row ">
                    <div className="col-11">
                        <div className="text-right">
                            <a href="#"><button className="buttonnav">LOGIN</button></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)

export default Navbar