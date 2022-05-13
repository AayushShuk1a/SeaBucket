import express from "express";
import cors from "cors";
import connection from "./DB/db.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
const PORT = process.env.PORT || 8000;
app.use("/", Router);
app.use(express.json());

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server Is Running On Port 8000");
});

connection();
