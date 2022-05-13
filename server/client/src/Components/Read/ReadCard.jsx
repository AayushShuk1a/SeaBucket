import React from "react";
import "./readcard.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ReadCard = (props) => {
  return (
    <div className="Cardss">
      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>

      <h2>
        Read More <KeyboardArrowRightIcon className="icon" />
      </h2>
    </div>
  );
};

export default ReadCard;
