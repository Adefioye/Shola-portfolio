import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import {
  hungerPortfolio,
  environmentPortfolio,
  roadCrossingPortfolio,
  welfarePortfolio,
  contentPortfolio,
} from "../../data";
import PortFolioList from "./PortFolioList";

function Portfolio() {
  const [selected, setSelected] = useState("environment");
  const [portfolio, setPortfolio] = useState([]);
  const highlight = selected ? "active" : "";

  const ref = useRef();

  useEffect(() => {
    switch (selected) {
      case "hunger":
        setPortfolio(hungerPortfolio);
        break;
      case "environment":
        setPortfolio(environmentPortfolio);
        break;
      case "welfare":
        setPortfolio(welfarePortfolio);
        break;
      case "road":
        setPortfolio(roadCrossingPortfolio);
        break;
      case "content":
        setPortfolio(contentPortfolio);
        break;
      default:
        setPortfolio(hungerPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "environment",
      title: "Environment",
    },
    {
      id: "road",
      title: "Road Crossing",
    },
    {
      id: "welfare",
      title: "Social Welfare",
    },
    {
      id: "hunger",
      title: "Zero Hunger",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio Gallery</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortFolioList
              id={item.id}
              active={selected === item.id}
              title={item.title}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="imageContainer">
        {portfolio.map((item) => {
          return <img key={item.id} src={item.img} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
