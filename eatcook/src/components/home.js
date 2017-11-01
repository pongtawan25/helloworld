import React from 'react'
<<<<<<< HEAD
import pichome from './../static/img/crossed-knife-and-fork.png'
=======
import Navbar from './navbar'
import '../static/css/font-awesome.min.css'
import '../static/css/animate.css'
>>>>>>> b6202654a962e5488ce50914a805886b26dc2285

const Home = () => (
  
  <div>
<<<<<<< HEAD
    <div className="row bghome">
      <div className="text-center">
        <h4 className="textwel">Welcome to</h4>
        <h1 className="textcook">COOK AND EAT</h1>
        <p className="textlet">LET'S COOKING AND SHARE YOUR IDEA</p>
         <img src = {pichome} width="50px"/>
=======
<<<<<<< HEAD
    <div className="row bghome">
=======
    <Navbar />
    <div className="row textboxhome">
>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
      <div className="text-center">
        <h4 className="colortexthome animated fadeInUp">Welcome to</h4>
        <h1 className="colortexthomesub animated fadeInUp">COOK AND EAT</h1>
        <p className="colortexthomesub animated fadeInUp">LET'S COOKING AND SHARE YOUR IDEA</p>
        <i class="fa fa-cutlery fa-4 colortexthomesub animated fadeInUp" aria-hidden="true"></i>
>>>>>>> b6202654a962e5488ce50914a805886b26dc2285
      </div>
    </div>
  </div>
)

export default Home