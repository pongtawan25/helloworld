import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './../static/img/crossed-knife-and-fork.png'

const Login = () => (
    <div>
        <div className="row bglogin">
            <div className="col-md-6">
                <div className="text-center">
                    <div className="">
                        <img className="logologin" src={img1} />
                        <h4 className="colortextlogin">LOG IN</h4>
                        <p className="text-light">cook and eat</p>
                        <div className="offset-md-3 col-md-6">
                            <input class="form-control" type="text" placeholder="EMAIL" />
                        </div>
                        <div className="offset-md-3 col-md-6">
                            <input class="form-control" type="text" placeholder="PASSWORD" />
                        </div>
                        <button className="btn btn-primary">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Login