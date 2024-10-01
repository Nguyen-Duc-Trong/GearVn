import express from "express";
import dotenv from "dotenv";
import { Connection } from "./Database/Connection.js";
import { Server } from "./src/server.js";
const app = express();
app.use(express.json());
dotenv.config();
Connection();
Server(app);
//abc

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server is listening on port ${process.env.PORT}`);
});
