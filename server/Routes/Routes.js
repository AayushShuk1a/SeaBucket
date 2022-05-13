import express from "express";
import {
  FAQController,
  getFaqController,
  ReadController,
  getReadController,
  TopicController,
  getTopicController,
} from "../Controller/Controller.js";

const Router = express.Router();

Router.post("/faq", FAQController);

Router.get("/faq", getFaqController);

Router.post("/read", ReadController);

Router.get("/read", getReadController);

Router.post("/topic", TopicController);

Router.get("/topic", getTopicController);

export default Router;
