import React from 'react'
import Home from './home'
import Shareidea from './shareidea'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="row">
            <ul className="nav">
                <div className="offset-md-1 col-md-1">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><button className="btn btn-dark">HOME</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/shareidea" className="nav-link"><button className="btn btn-dark">SHARE IDEA</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/makeit" className="nav-link"><button className="btn btn-dark">MAKE IT</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/rewards" className="nav-link"><button className="btn btn-dark">REWARDS</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/inspiration" className="nav-link"><button className="btn btn-dark">INSPIRATION</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/contactus" className="nav-link"><button className="btn btn-dark">CONTACT US</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/member" className="nav-link"><button className="btn btn-dark">MEMBER</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                        <li className="nav-item">
                            <Link to="login" className="nav-link " href="#"><button className="btn btn-primary">LOGIN</button></Link>
                        </li>
                    </div>
            </ul>
        </div>
    </div>
)

export default Navbar