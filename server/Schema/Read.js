import mongoose from "mongoose";

const ReadSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Read = mongoose.model("read", ReadSchema);

export default Read;
