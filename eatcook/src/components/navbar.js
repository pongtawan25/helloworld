import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="row">
            <ul className="nav">
                <div className="offset-md-2 col-md-1">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><button >HOME</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/shareidea" className="nav-link"><button >SHARE IDEA</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/makeit" className="nav-link"><button >MAKE IT</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/rewards" className="nav-link"><button >REWARDS</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/inspiration" className="nav-link"><button>INSPIRATION</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/contactus" className="nav-link"><button>CONTACT US</button></Link>
                    </li>
                </div>
                <div className="col-md-1">
                    <li className="nav-item">
                        <Link to="/member" className="nav-link"><button>MEMBER</button></Link>
                    </li>
                </div>
                <div className="offset-md-1 col-md-1">
                        <li className="nav-item">
                            <a href="#" className="nav-link "><button className="btn btn-primary">LOGIN</button></a>
                        </li>
                    </div>
            </ul>
        </div>
    </div>
)

export default Navbar