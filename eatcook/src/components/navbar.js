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
<<<<<<< HEAD
            <div className="offset-md-2 col-md-1">
                <Link to="/login"><button className="btn btn-custom">LOGIN</button></Link>
=======
            <div className="offset-md-1 col-md-1">
                <Link to="/login"><button className="btn btn-login" src=''><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button></Link>

>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
            </div>
        </div>
    </div>
)

export default Navbar