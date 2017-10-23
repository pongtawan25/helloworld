import React from 'react'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="row">
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-outline-light">HOME</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-outline-success">REWARD</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-outline-primary">VOTE</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-outline-secondary">SHARE</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-outline-danger">SHARE</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-link">SHARE</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-outline-dark">SHARE</button></a>
                    </li>
                </ul>
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link " href="#"><button className="btn btn-primary">LOGIN</button></a>
                </li>
            </ul>
        </div>
    </div>
)

export default Navbar