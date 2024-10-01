import { userModel } from "../../../Database/models/user.model.js";
import bcrypt from "bcrypt";
import { sendEmailService } from "../../service/emailService.js";
import jwt from "jsonwebtoken";
const postSignup = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  console.log({ name, email, password, role });
  try {
    // Check if email already exists
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword, role });
    await user.save();
    // Gửi email thông báo đăng ký thành công
    const subject = "Signup Succeeded!";
    const html = "<h1>You successfully signed up</h1>";
    await sendEmailService(email, subject, html);
    res.json({ message: "Bạn đã đăng kí thành công", isSignup: true });
  } catch (e) {
    console.log(e);
  }
};
const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log({ email: email, password: password });
  const user = await userModel.findOne({ email: email });
  const doMatch = await bcrypt.compare(password, user.password);
  console.log(doMatch);
  if (doMatch) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "3600s",
    });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.json({
      accessToken,
      refreshToken,
      isLogin: true,
      user: user,
      role: user.role,
    });
  }
  res.json(doMatch);
};
export { postSignup, postLogin };
