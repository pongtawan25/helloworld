import React from "react";
import Navbar from "./navbar";
import img1 from "./../static/img/group.png";
import img2 from "./../static/img/location.png";

const Contactus = () => (
  <div>
    <Navbar />
    <div className="row bgcontactus animated fadeIn">
      <div className="offset-md-3 col-md-3">
        <div className="text-center">
          <div className="box animated fadeInUp">
            <img className="logoconmem" src={img2} alt="img2" />
            <h3>CONTACT US</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="text-center">
          <div className="box animated fadeInUp">
            <img className="logoconmem" src={img1} alt="img1" />
            <h3>MEMBER</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contactus;
