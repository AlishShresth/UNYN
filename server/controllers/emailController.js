const expressAsyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});
const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    var mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: "Email from " + name,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully");
        }
    });

});

module.exports = { sendEmail };
