import React from "react";
import pichome from "./../static/img/crossed-knife-and-fork.png";
import Navbar from "./navbar";
import "./../static/css/animate.css";

const Home = () => (
  <div>
    <Navbar />
    <div className="row bghome animated fadeIn">
      <div className="text-center">
        <h4 className="textwel animated fadeInUp">Welcome to</h4>
        <h1 className="textcook animated fadeInUp">COOK AND EAT</h1>
        <p className="textlet animated fadeInUp">
          LET'S COOKING AND SHARE YOUR IDEA
        </p>
        <img
          className="animated fadeInUp"
          src={pichome}
          width="50px"
          alt="pichome"
        />
      </div>
    </div>
  </div>
);

export default Home;
