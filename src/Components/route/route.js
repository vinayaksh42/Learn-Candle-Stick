import React from "react";
import { data } from "../LearnModule/DataSet";
import { useParams } from "react-router-dom";
import "./route.css";

function Routeing() {
  const params = useParams();

  return (
    <>
      <div className="Heading_div">
        <h1 className="Heading_tag">{data[params.id - 1].name}</h1>
      </div>
      <div className="image_div">
        <img
          className="image_tag"
          alt=""
          src={`/${data[params.id - 1].image}`}
        />
      </div>
      <div className="Text_div">
        <p>{data[params.id - 1].description}</p>
      </div>
      <div className="image_stock_div">
        <img
          className="image_stock"
          alt=""
          src={`/${data[params.id - 1].image1}`}
        />
      </div>
    </>
  );
}

export default Routeing;
