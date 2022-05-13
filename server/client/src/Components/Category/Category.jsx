import React from "react";
import CategoryCard from "./CategoryCard";
import Fish from "../../Images/Fish.png";
import Crustaceans from "../../Images/crustaceans.png";
import Exotic from "../../Images/Exotic.png";
import "./Category.scss";
const Category = () => {
  return (
    <div className="Category">
      <h1>Categories</h1>
      <div className="Categories">
        <CategoryCard image={Fish} text="Fish" />
        <CategoryCard image={Crustaceans} text="Crustaceans" />
        <CategoryCard image={Exotic} text="Exotic" />
      </div>
    </div>
  );
};

export default Category;
