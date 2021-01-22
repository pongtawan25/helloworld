import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import "./../static/css/style.css";
import "./../static/css/bootstrap.min.css";

const Youridea = () => (
  <div>
    <Navbar />
    <div className="row bgyouridea  animated fadeIn">
      <div className="offset-md col-md text-center">
        <h1 className="textyoueidea animated fadeInUp">
          LET'S SHARE YOUR IDEA
          <br />
          <Link to="/startidea">
            <button className="btn btn-custom2 hvr-fadenavbar hvr-grow-shadow animated fadeInUp">
              SHARE IDEA
            </button>
          </Link>
        </h1>
      </div>
    </div>
  </div>
);

export default Youridea;
