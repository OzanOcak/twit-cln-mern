import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 8000;
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connect to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

app.use("/api/users", userRoutes);

app.listen(PORT, (req, res) => {
  connect();
  `console.log(server is runninin on port ${PORT}`;
});
