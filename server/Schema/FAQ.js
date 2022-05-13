import mongoose from "mongoose";

const FaqSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const FAQ = mongoose.model("FAQ", FaqSchema);

export default FAQ;
