import React, { useState } from "react";
import "./faqCard.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FaqCard = (props) => {
  const [isVisible, setisVisible] = useState(false);

  const handleVisiblity = () => {
    isVisible ? setisVisible(false) : setisVisible(true);
  };

  const Button = isVisible ? (
    <KeyboardArrowUpIcon className="icon" onClick={handleVisiblity} />
  ) : (
    <KeyboardArrowDownIcon className="icon" onClick={handleVisiblity} />
  );

  return (
    <div className="Cardss">
      <div className="upper">
        <h4>{props.item.question}</h4>
        {Button}
      </div>
      {isVisible && <div className="description">{props.item.answer}</div>}
    </div>
  );
};

export default FaqCard;
