const contactSchema = require("../Models/Contact");
const nodemailer = require("nodemailer");

const ContactForm = async (req, res) => {
  const { userMessage } = req.body;
  const { mail, message } = userMessage;
  try {
    const contactData = await new contactSchema({
      message,
    });
    await contactData.save();

    // Send User message to clients //
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    var mailOptions = {
      to: [mail],
      subject: "Need to Contact",
      html: `<h3 style="color: black; font-weight: 700; ">Message from user:</h3>
             <h4 style="color:#ff6600;">${message}</h4>`,
    };
    transporter.sendMail(mailOptions);
    return res.status(200).send({
      mesg: "User message is successfully stored into DataBase",
      data: contactData,
    });
  } catch (error) {
    return res.status(500).send({
      mesg: `Server Error ${error.message}`,
    });
  }
};

const GetTest = async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
};

module.exports = {
  ContactForm,
  GetTest,
};
