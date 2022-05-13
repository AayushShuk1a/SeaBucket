import React, { useEffect, useState } from "react";
import { getReads } from "../API/ApiCalls.js";
import "./Read.scss";
import ReadCard from "./ReadCard";

const Read = () => {
  const [Read, setRead] = useState([]);

  useEffect(() => {
    const getRead = async () => {
      const read = await getReads();
      setRead(read);
    };

    getRead();
  }, []);

  return (
    <div className="Read">
      <h1>Have a Read</h1>
      <div className="readCard">
        {Read.map((item) => (
          <ReadCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Read;
