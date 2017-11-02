import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'
import login from './login'
import './../static/css/font-awesome.min.css'

const Navbar = () => (
    <div>
        <div className="row col-md-12 navv ">
                <Link to="/"><button className="btn btn-nav hvr-fadenavbar hvr-grow-shadow">HOME</button></Link>
                <Link to="/shareidea"><button className="btn btn-nav hvr-fadenavbar hvr-grow-shadow">SHARE IDEA</button></Link>
                <Link to="/makeit"><button className="btn btn-nav hvr-fadenavbar hvr-grow-shadow">MAKE IT</button></Link>
                <Link to="/rewards"><button className="btn btn-nav hvr-fadenavbar hvr-grow-shadow">REWARDS</button></Link>
                <Link to="/inspiration"><button className="btn btn-nav hvr-fadenavbar hvr-grow-shadow">INSPIRATION</button></Link>
                <Link to="/contactus"><button className="btn btn-nav hvr-fadenavbar hvr-grow-shadow">CONTACT</button></Link>
                
                <Link to="/login"><button className="btn btn-nav-login hvr-fadenavbar hvr-grow-shadow" src=''><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button></Link>
        </div>
    </div>
)

export default Navbar