import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const sendEmailService = async (email, subject, html, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //false for TLS, true for SSL
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL,
      pass: process.env.PASSWORDEMAIL,
    },
  });
  const info = await transporter.sendMail({
    from: '"Gearvn" <phamdinhthangpdt02@gmail.com>', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
  return info;
};
export { sendEmailService };
