import React from 'react'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="row">
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">REWARD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">VOTE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SHARE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SHARE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SHARE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SHARE</a>
                    </li>
                </ul>
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link " href="#">LOGIN</a>
                </li>
            </ul>
        </div>
    </div>
)

export default Navbar