import React, { useEffect, useState } from "react";
import { getTopics } from "../API/ApiCalls";
import TopicCard from "./TopicCard";
import "./topics.scss";

const Topics = () => {
  const [Topic, setTopic] = useState([]);

  useEffect(() => {
    const getTopic = async () => {
      const topic = await getTopics();
      setTopic(topic);
    };

    getTopic();
  }, []);

  console.log(Topic);
  return (
    <div className="topics">
      <h1>Topics you can't miss</h1>
      <div className="topicCards">
        {Topic.map((item) => (
          <TopicCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
