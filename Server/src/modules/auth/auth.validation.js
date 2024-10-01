import Joi from "joi";
const addUserValidator = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().required(),
});
const loginUserValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
export { addUserValidator, loginUserValidator };
