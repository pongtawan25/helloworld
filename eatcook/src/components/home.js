import React from 'react'
import pichome from './../static/img/crossed-knife-and-fork.png'
import Navbar from './navbar'

const Home = () => (

  <div>
    <Navbar />
    <div className="row bghome">
      <div className="text-center">
        <h4 className="textwel">Welcome to</h4>
        <h1 className="textcook">COOK AND EAT</h1>
        <p className="textlet">LET'S COOKING AND SHARE YOUR IDEA</p>
        <img src={pichome} width="50px" />
      </div>
    </div>
  </div>
)

export default Home