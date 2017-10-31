import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="row navv">
            <div className="offset-md-3 col-md-1">
                <Link to="/"><button className="btn btn-custom">HOME</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/shareidea"><button className="btn btn-custom">SHARE IDEA</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/makeit"><button className="btn btn-custom">MAKE IT</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/rewards"><button className="btn btn-custom">REWARDS</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/inspiration"><button className="btn btn-custom">INSPIRATION</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/contactus"><button className="btn btn-custom">CONTACT US</button></Link>
            </div>
            <div className="offset-md-2 col-md-1">
                <a href="#"><button className="btn btn-custom">LOGIN</button></a>

            </div>
        </div>
    </div>
)

export default Navbar