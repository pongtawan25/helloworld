import React from "react";
import img1 from "./../static/img/omelet-2500-56a210d95f9b58b7d0c63239.jpg";
import img2 from "./../static/img/051121056-01-spaghetti-carbonara-recipe-main.jpg";
import img3 from "./../static/img/lentil-spinach-tomato-salad-50528-1.jpeg";
import img4 from "./../static/img/photo-1471102204080-fe99e6db4ef0.jpg";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "./../static/css/style.css";

const Learnandcook = () => (
  <div>
    <Navbar />
    <div className="row bglearnandcook  animated fadeIn">
      <div className="offset-md-3 col-md-6">
        <div className="text-center">
          <h1 className="textlearn animated fadeInUp">LEARN and COOK</h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Link to="/omelet">
          <img className="imglearn animated fadeInUp" src={img1} alt="img1" />
        </Link>
      </div>
      <div className="col-md-3">
        <Link to="/spagetti">
          <img className="imglearn animated fadeInUp" src={img2} alt="img2" />
        </Link>
      </div>
      <div className="col-md-3">
        <Link to="/salad">
          <img className="imglearn animated fadeInUp" src={img3} alt="img3" />
        </Link>
      </div>
      <div className="col-md-3">
        <Link to="/donut">
          <img className="imglearn animated fadeInUp" src={img4} alt="img4" />
        </Link>
      </div>
    </div>
  </div>
);

export default Learnandcook;
