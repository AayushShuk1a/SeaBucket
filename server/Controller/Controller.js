import FAQ from "../Schema/FAQ.js";
import Read from "../Schema/Read.js";
import Topics from "../Schema/Topics.js";

export const FAQController = async (req, res) => {
  try {
    const FAQs = await new FAQ(req.body);
    FAQs.save();
    res.status(200).json(FAQs);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getFaqController = async (req, res) => {
  try {
    let faq = await FAQ.find();
    res.status(200).json(faq);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const ReadController = async (req, res) => {
  try {
    const Reads = await new Read(req.body);
    Reads.save();
    res.status(200).json(Reads);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getReadController = async (req, res) => {
  try {
    let Reads = await Read.find();
    res.status(200).json(Reads);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const TopicController = async (req, res) => {
  try {
    const Topic = await new Topics(req.body);
    Topic.save();
    res.status(200).json(Topic);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTopicController = async (req, res) => {
  try {
    let Topic = await Topics.find();
    res.status(200).json(Topic);
  } catch (err) {
    res.status(500).json(err);
  }
};
