import React from 'react'
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
