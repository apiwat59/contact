import nodemailer from "nodemailer";
export default async (req, res) => {
  const { Name, Email, Message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'sender@gmail.com',
        pass: 'password',
    }
  });

const data={ from: Email,
    from: 'email@gmail.com',
    to: "myself@gmail.com",
    subject: `Message from ${Name}`,
      html: `<h1>${Name} has contacted you</h1>
      <p>You have a contact form submission.</p><br>
        <p><strong>Email: </strong> ${Email}</p><br>
        <p><strong>Message: </strong> ${Message}</p><br>
      `}

      transporter.sendMail(data, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log('Email sent: ' + info.response)
      })
};