import express from "express";
import cors from "cors";
import connection from "./DB/db.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use("/", Router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server Is Running On Port 8000");
});

connection();
