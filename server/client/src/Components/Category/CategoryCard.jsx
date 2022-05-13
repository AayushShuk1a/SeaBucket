import React from "react";
import "./categorycard.scss";

const CategoryCard = (props) => {
  return (
    <div className="Cards">
      <img src={props.image} alt="category" />
      <h4>{props.text}</h4>
    </div>
  );
};

export default CategoryCard;
