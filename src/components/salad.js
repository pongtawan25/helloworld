import React from "react";
import Navbar from "./navbar";
import "./../static/css/style.css";
import salad from "./../static/img/6546.jpg";

const Salad = () => (
  <div>
    <Navbar />
    <div className="row text-center">
      <img className="bgmanu" src={salad} alt="salad" />
    </div>
  </div>
);

export default Salad;
