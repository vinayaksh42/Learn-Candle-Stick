import React from "react";
import "./LearnModule.css";
import { data } from "./DataSet";

export const LearnModule = () => {
  return (
    <>
      <div className="Heading_div">
        <h1 className="Heading_tag">{data[1].name}</h1>
      </div>
      <div className="image_div">
        <img className="image_tag" alt="" src={data[1].image} />
      </div>
      <div className="Text_div">
        <p>{data[1].description}</p>
      </div>
      <div className="image_stock_div">
        <img className="image_stock" alt="" src={data[1].image1} />
      </div>
    </>
  );
};

export default LearnModule;
