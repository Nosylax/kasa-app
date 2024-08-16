import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <span className="bannerTitle">{props.title}</span>
      <img className="bannerImage" src={props.img} alt="bannière" />
    </div>
  );
}

export default Banner;
