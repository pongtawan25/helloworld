import React from "react";
import Navbar from "./navbar";
import "./../static/css/style.css";
import donut from "./../static/img/515.jpg";

const Donut = () => (
  <div>
    <Navbar />
    <div className="row text-center">
      <img className="bgmanu" src={donut} alt="donut" />
    </div>
  </div>
);

export default Donut;
