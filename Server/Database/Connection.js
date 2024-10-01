import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export function Connection() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((error) => {
      console.log("DB Failed to connect", error);
    });
}
