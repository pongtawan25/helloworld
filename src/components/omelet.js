import React from "react";
import Navbar from "./navbar";
import "./../static/css/style.css";
import omelet from "./../static/img/519541591.jpg";

const Omelet = () => (
  <div>
    <Navbar />
    <div className="row text-center">
      <img className="bgmanu" src={omelet} alt="omelet" />
    </div>
  </div>
);

export default Omelet;
