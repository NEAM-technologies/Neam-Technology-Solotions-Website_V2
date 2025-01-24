import nodemailer from "nodemailer";

export const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
export const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
