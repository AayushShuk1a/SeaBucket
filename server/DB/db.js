import mongoose from "mongoose";

const URL =
  "mongodb+srv://AayushShukla:aayushtkd@cluster0.1tu8z.mongodb.net/SEABASKET?retryWrites=true&w=majority";

const connection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To Mongo DB");
  } catch (err) {
    console.log(err);
  }
};

export default connection;
