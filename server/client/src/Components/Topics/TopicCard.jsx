import React from "react";
import "./topiccard.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TopicCard = (props) => {
  const makeStyles = {
    backgroundImage: `linear-gradient(
        90.13deg,
        #ffffff 1.67%,
        rgba(255, 255, 255, 0) 99.89%
      ),
      url(${props.item.image})`,
  };

  return (
    <div className="topicCard">
      <div className="Wrapper" style={makeStyles}>
        <div className="leftPart">
          <h1>{props.item.title}</h1>
          <p>{props.item.description}</p>

          <h2>
            Read More <KeyboardArrowRightIcon className="icon" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
