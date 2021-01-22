import React from "react";
import Navbar from "./navbar";
import "./../static/css/style.css";
import "./../static/css/bootstrap.min.css";
import picstart from "./../static/img/picture.png";

const Startidea = () => (
  <div>
    <Navbar />
    <div className="row bgstartidea text-right paddingtopstart  animated fadeIn">
      <div className="col-md-12 ">
        <h4 className="textshareidea animated fadeInUp"> SHARE YOUR IDEA </h4>
        <div className="col-md-5 float-right">
          <div class="form-group">
            <img
              className="paddingpicstart animated fadeInUp"
              src={picstart}
              width="320px"
              alt="picstart"
            />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
            <label
              className="textstartmanu"
              for="exampleFormControlTextarea1 animated fadeInUp"
            >
              START MENU
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Startidea;
