import { Work } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { WorkGallery } from "./../../data";
import "./Works.css";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < WorkGallery.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {WorkGallery.map((item) => (
          <div key={item.id} className="container">
            <div className="item">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <img
        src="./assets/arrow.png"
        className="left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="./assets/arrow.png"
        className="right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Works;
