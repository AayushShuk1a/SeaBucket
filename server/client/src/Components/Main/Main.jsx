import React from "react";
import FishImage from "../../Images/Group39.png";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <img src={FishImage} alt="" />
      </div>
      <div className="works">
        <h2 className="heading">HOW IT WORKS</h2>
        <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
      </div>
    </>
  );
};

export default Main;
