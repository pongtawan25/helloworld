import React from 'react'
<<<<<<< HEAD
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
=======

import './../static/css/style.css'
import './../static/css/bootstrap.min.css'

const Login = () => (
  <div>
  <div class="card" className="width: 500px;">
  <div class="card-body">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1"><i class="fa fa-user" aria-hidden="true"></i> Username</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><i class="fa fa-lock" aria-hidden="true"></i> Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""></input>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" className="form-check-input"></input>
      Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Log in</button>
  </form>
</div>
</div>


    </div>
)

export default Login
>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
