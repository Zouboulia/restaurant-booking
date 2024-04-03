import React from "react";
import Image from "next/image";
import "./../app/globals.css";
import Rest1 from "./../public/platter-2009590_1280.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <Image src={Rest1} alt="" className="featureImage" />
        <div className="featuredTitles">
          <h1>Dublin Restaurant</h1>
          <h2>Best food in town</h2>
        </div>
      </div>
      <div className="featuredItem">
        <Image src={Rest1} alt="" className="featureImage" />
        <div className="featuredTitles">
          <h1>Dublin Restaurant</h1>
          <h2>Best food in town</h2>
        </div>
      </div>{" "}
      <div className="featuredItem">
        <Image src={Rest1} alt="" className="featureImage" />
        <div className="featuredTitles">
          <h1>Dublin Restaurant</h1>
          <h2>Best food in town</h2>
        </div>
      </div>{" "}
    </div>
  );
};

export default Featured;
