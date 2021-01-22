import React from "react";
import { Link } from "react-router-dom";
import "./../static/css/style.css";
import "./../static/css/bootstrap.min.css";
import pichome from "./../static/img/crossed-knife-and-fork.png";

const Login = () => (
  <div>
    <div className="row">
      <div className="col-sm-8  bglogin bgmainlogin animated fadeInRight">
        <img className="picporklogin" src={pichome} alt="pichome" />
        <h1 className="textlogin">COOK AND EAT</h1>
        <Link to="/">
          <button className="btn btn-backtohome hvr-icon-back hvr-grow-shadow">
            Back to page
          </button>
        </Link>
      </div>

      <div className="col-sm-4 bglogincomponent animated fadeInRight textlogincomponent ">
        <i className="media-object fa fa-user-circle fa-5x"></i>
        <h2>Login</h2>
        <h6>for your best exprience</h6>

        <form>
          <div className="form-group textlogincomponent  marginlogologin">
            <label for="exampleInputEmail1">
              <br />
            </label>
            <span className="input-icon">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
              ></input>
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>

          <div className="form-group">
            <span className="input-icon">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input"></input>
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-backtohome hvr-fadelogin hvr-grow-shadow"
            onclick="LoginFailed()"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
