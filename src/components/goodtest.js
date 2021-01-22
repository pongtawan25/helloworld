import React from "react";
import Navbar from "./navbar";
import img1 from "./../static/img/อาหารแชร์3.jpg";
import img2 from "./../static/img/Giftvouchers-DesktopV1.png";
import "./../static/css/style.css";

const Goodtest = () => (
  <div>
    <Navbar />
    <div className="row bggoodtest">
      <div className="offset-md-2 col-md-6 animated fadeInUp">
        <h2 className="textgoodtest">THE HEIGHEST VOTES IS</h2>
        <img className="img1 " src={img1} alt="img1" />
      </div>
      <div className="offset-md-1 col-md-3 animated fadeInUp">
        <h2 className="textgoodtest2">รางวัลประจำสัปดาห์</h2>
        <img className="img2" src={img2} alt="img2" />
      </div>
    </div>
  </div>
);

export default Goodtest;
