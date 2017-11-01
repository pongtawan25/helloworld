import React from 'react'
import Navbar from './navbar'
import '../static/css/font-awesome.min.css'
import '../static/css/animate.css'

const Home = () => (
  
  <div>
    <Navbar />
    <div className="row textboxhome">
      <div className="text-center">
        <h4 className="colortexthome animated fadeInUp">Welcome to</h4>
        <h1 className="colortexthomesub animated fadeInUp">COOK AND EAT</h1>
        <p className="colortexthomesub animated fadeInUp">LET'S COOKING AND SHARE YOUR IDEA</p>
        <i class="fa fa-cutlery fa-4 colortexthomesub animated fadeInUp" aria-hidden="true"></i>
      </div>
    </div>
  </div>
)

export default Home