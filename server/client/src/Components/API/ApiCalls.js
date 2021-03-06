import axios from "axios";

const URL = "https://fishbucket.herokuapp.com/";

export const getFaqs = async () => {
  const FAQ = await axios.get(`${URL}faq`);

  return FAQ.data;
};

export const getReads = async () => {
  const read = await axios.get(`${URL}read`);

  return read.data;
};

export const getTopics = async () => {
  const topic = await axios.get(`${URL}topic`);

  return topic.data;
};
