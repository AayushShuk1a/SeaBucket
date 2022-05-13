import React, { useRef, useState } from "react";
import "./Product.scss";
import poster from "../../Images/video.png";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Product = () => {
  const videoRef = useRef(null);
  const [videoPlaying, setvideoPlaying] = useState(false);

  const handlePlay = () => {
    if (videoPlaying === false) {
      videoRef.current.play();
      setvideoPlaying(true);
    } else {
      videoRef.current.pause();
      setvideoPlaying(false);
    }
  };

  return (
    <div className="Products">
      <h1>A GLANCE AT OUR PRODUCT</h1>
      <div className="video">
        {!videoPlaying && (
          <PlayCircleFilledWhiteIcon className="Icon" onClick={handlePlay} />
        )}
        <video
          onClick={handlePlay}
          src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
          poster={poster}
          ref={videoRef}
        ></video>
      </div>
    </div>
  );
};

export default Product;
