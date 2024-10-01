import express from "express";
import * as auth from "./auth.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addUserValidator, loginUserValidator } from "./auth.validation.js";
const authRouter = express.Router();

authRouter.post("/signup", validate(addUserValidator), auth.postSignup);
authRouter.post("/signin", validate(loginUserValidator), auth.postLogin);

export default authRouter;
