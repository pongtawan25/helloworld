import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'
import login from './login'
import './../static/css/font-awesome.min.css'

const Navbar = () => (
    <div>
        <div className="row navv">
            <div className="offset-md-3 col-sm-1">
                <Link to="/"><button className="btn btn-custom2">HOME</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/shareidea"><button className="btn btn-custom2">SHARE IDEA</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/makeit"><button className="btn btn-custom2">MAKE IT</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/rewards"><button className="btn btn-custom2">REWARDS</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/inspiration"><button className="btn btn-custom2">INSPIRATION</button></Link>
            </div>
            <div className="col-md-1">
                <Link to="/contactus"><button className="btn btn-custom2">CONTACT</button></Link>
            </div>
            <div className="offset-md-1 col-md-1">
                <Link to="/login"><button className="btn btn-login" src=''><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button></Link>

            </div>
        </div>
    </div>
)

export default Navbar