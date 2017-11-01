import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/style.css'
import './../static/css/bootstrap.min.css'
import pichome from './../static/img/crossed-knife-and-fork.png'

const Login = () => (
  <div class="bgmainlogin">
  <div class="row height100">
  <div class="col-sm-8 height100 bglogin bgmainlogin animated fadeInRight">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <img className=""src={pichome} width="80px" />
  <br />
  <br />
  <h1 className="textcook textlogin">COOK AND EAT</h1>
  <Link to="/"><button className="btn btn-backtohome hvr-icon-back hvr-grow-shadow">Back to page</button></Link>
  </div>
  <div class="col-sm-4 bglogincomponent animated fadeInRight textlogincomponent height100">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <i class="media-object fa fa-user-circle fa-5x"></i>
  <h2>Login</h2>
  <h6>for your best exprience</h6>
  

    <form>
  <div class="form-group textlogincomponent  marginlogologin">
  
    <label for="exampleInputEmail1"> <br /></label>
    <span class="input-icon">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"></input>
    <i class="fa fa-user" aria-hidden="true"></i>
    </span>
  </div>
  <div class="form-group">
    {/* <label for="exampleInputPassword1"></label> */}
    <span class="input-icon">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    <i class="fa fa-lock" aria-hidden="true"></i>
    </span>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" className="form-check-input"></input>
      Remember me
    </label>   
  </div>
  <button type="submit" class="btn btn-backtohome hvr-fadelogin hvr-grow-shadow" onclick="LoginFailed()">Log in</button>
  <br />
  <br />
  <br />
  </form>
</div>
</div>
</div>
    
)





export default Login
