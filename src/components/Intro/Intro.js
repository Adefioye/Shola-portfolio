import React, { useEffect, useRef } from "react";
import { ArrowForwardIos } from "@material-ui/icons";
import { init } from "ityped";
import "./Intro.css";

function Intro() {
  const ref = useRef();

  useEffect(() => {
    init(ref.current, {
      showCursor: false,
      strings: [
        "Program Coordinator",
        "Humanitarian Aid Worker",
        "Content Writer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/profile-pic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <h3>Hi awesome one! I'm</h3>
        <h1>Adeshola Adeniji</h1>
        <h3 ref={ref} className="job-title"></h3>
        <a href="#portfolio">
          <ArrowForwardIos className="arrow-down" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
