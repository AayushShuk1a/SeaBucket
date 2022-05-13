import mongoose from "mongoose";

const TopicsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Topics = mongoose.model("Topics", TopicsSchema);

export default Topics;
